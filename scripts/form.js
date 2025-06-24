const password = document.querySelector('#pwd');
const confirmedpwd = document.querySelector('#confirmpwd');

function validatePassword(){
    if (password.value !== confirmedpwd.value) {
        confirmedpwd.setCustomValidity("Passwords Don't Match");
    } else {
        confirmedpwd.setCustomValidity('');
    }
}

password.addEventListener('change', validatePassword);
confirmedpwd.addEventListener('keyup', validatePassword);
