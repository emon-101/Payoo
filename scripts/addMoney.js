document.getElementById('add-money-btn').addEventListener('click', function(){
    // select the bank
    const bank = getInputValue('select-bank');
    if(bank == 'Select Bank') {
        alert('Please select a bank!');
        return;
    }
    // get the bank account number
    const bankAccount = getInputValue('account-number');
    if(bankAccount.length != 11) {
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

        const history = document.getElementById('history-container');

        const newHistory = document.createElement('div');
        newHistory.innerHTML = `
            <div class="transaction-card p-5 bg-base-100 mt-5">
                <p>Add Money Success from ${bank}, acc-no ${bankAccount} at ${new Date()} </p>
            </div>
        `;
        history.appendChild(newHistory);
    } else {
        alert('Invalid Pin number');
        return;
    }
})