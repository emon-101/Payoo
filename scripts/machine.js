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