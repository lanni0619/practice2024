function Btn() {
    let name = document.querySelector('#name').value;
    let email = document.querySelector('#email').value;
    let password = document.querySelector('#password').value;

    if (name == '' || name.length > 10) {
        let errorName = document.querySelector('#errorName');
        errorName.style.visibility = 'visible';
    } else {
        errorName.style.visibility = 'hidden';
    }

    if (email == '' || !email.includes('TW1') || !email.includes('@')) {
        errorEmail.style.visibility = 'visible';
    } else {
        errorEmail.style.visibility = 'hidden';
    }

    if (password == '' || password.length < 8 || password.length > 15) {
        errorPassword.style.visibility = 'visible';
    } else {
        errorPassword.style.visibility = 'hidden';
    }
}
