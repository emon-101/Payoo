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
    const balanceElement = document.getElementById('balance');
    const balance = balanceElement.innerText;

    // Calculate new balance
    const newBalance = Number(balance) - Number(cashoutAmount);
    if(newBalance < 0) {
        alert('Invalid Balance');
        return;
    }

    // get the Pin number and process the cashout method
    const cashoutPin = getInputValue('cashout-pin');
    if(cashoutPin=='1001') {
        alert('Cashout Successful!');
        balanceElement.innerText = newBalance;
        return;
    } else {
        alert('Invalid Pin!');
        return;
    }
})