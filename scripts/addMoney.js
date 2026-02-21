document.getElementById('add-money-btn').addEventListener('click', function(){
    // select the bank
    const bank = getInputValue('select-bank');
    if(bank == 'Select Bank') {
        alert('Please select a bank!');
        return;
    }
    // get the bank account number
    const backAccount = getInputValue('account-number');
    if(backAccount.length != 11) {
        alert('Incorrect account number!');
        return;
    }

    // get the amount
    const amount = getInputValue('add-amount');
    if(amount <0 ) {
        alert('Invalid balance!');
        return;
    }

    // get the current balance
    const currentBalance = getBalance() + Number(amount);

    // get the pin number and execute the add money program
    const pin = getInputValue('add-money-pin');

    if(pin=='1001') {
        alert(`Add Money Successful form ${bank} at ${new Date()}`);
        setBalance(currentBalance);
    } else {
        alert('Invalid Pin number');
        return;
    }
})