// Cashout Button Event
document.getElementById('cashout-btn').addEventListener('click', function(){
    // get the agent number
    const agentNumber = getInputValue('cashout-number');
    
    if(agentNumber.length != 11) {
        alert('invalid agent number!');
        return;
    }

    // get the withdrwal money
    const cashoutAmount = getInputValue('cashout-amount');

    // get the current balance
    const balance = getBalance();

    // Calculate new balance
    const newBalance = balance - Number(cashoutAmount);
    if(newBalance < 0) {
        alert('Invalid Balance');
        return;
    }

    // get the Pin number and process the cashout method
    const cashoutPin = getInputValue('cashout-pin');
    if(cashoutPin=='1001') {
        alert('Cashout Successful!');
        setBalance(newBalance);
        const history = document.getElementById('history-container');

        const newHistory = document.createElement('div');
        newHistory.innerHTML = `
            <div class="transaction-card p-5 bg-base-100 mt-5">
                <p>Cashout ${cashoutAmount} to ${agentNumber},  at ${new Date()} </p>
            </div>
        `;
        history.appendChild(newHistory);
    } else {
        alert('Invalid Pin!');
        return;
    }
})