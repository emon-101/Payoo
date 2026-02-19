// Cashout Button Event
document.getElementById('cashout-btn').addEventListener('click', function(){
    // get the agent number
    const agentNumberInput = document.getElementById('cashout-number');
    const agentNumber = agentNumberInput.value;
    
    if(agentNumber.length != 11) {
        alert('invalid agent number!');
        return;
    }

    // get the withdrwal money
    const cashoutAmountInput = document.getElementById('cashout-amount');
    const cashoutAmount = cashoutAmountInput.value;

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
    const cashoutPinInput = document.getElementById('cashout-pin');
    const cashoutPin = cashoutPinInput.value;
    if(cashoutPin=='1001') {
        alert('Cashout Successful!');
        balanceElement.innerText = newBalance;
        return;
    } else {
        alert('Invalid Pin!');
        return;
    }
})