document.getElementById('login-btn').addEventListener('click', function(){
    const inputNumber = document.getElementById('input-number');
    const contactNumber = inputNumber.value;

    const loginPassword = document.getElementById('login-password');
    const password = loginPassword.value;

    if(contactNumber=='01922719949' && password=='1001') {
        alert('login successful!');
        window.location.assign('/home.html');
    } else {
        alert('login failed!');
        return;
    }
})