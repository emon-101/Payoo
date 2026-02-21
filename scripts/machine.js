// function that returns input value from input
function getInputValue(id) {
    const inputField = document.getElementById(id);
    const inputValue = inputField.value;
    return inputValue;
}

// get the current balance
function getBalance() {
    const balanceContainer = document.getElementById('balance');
    const balance = balanceContainer.innerText;
    return Number(balance);
}

// set the current balance
function setBalance(val) {
    document.getElementById('balance').innerText = val;
}

// hide and show section
function showAll(id) {
    const addmoney = document.getElementById('add-money');
    const cashout = document.getElementById('cashout');
    
    addmoney.classList.add('hidden');
    cashout.classList.add('hidden');

    const selected = document.getElementById(id);
    selected.classList.remove('hidden');
}