var API_URL;
var email;
var password;
var alerts;
var emailExpression;
var formButton;
var registerBtn;
var validates = {
    email: [false, 'ERROR Email cannot be empty'],
    password: [false, 'ERROR Password cannot be empty'],
}

window.onload = function() {
    variables();
    eventsListeners();
}

function variables() {
    email = document.querySelector('.email');
    password = document.querySelector('.password');
    alerts = document.querySelector('.alerts');
    formButton = document.querySelector('.form-button');
    registerBtn = document.querySelector('.form-button-secondary')
    emailExpression = /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/;
    API_URL = 'https://basp-m2022-api-rest-server.herokuapp.com/login'
}

function eventsListeners() {
    email.addEventListener('blur', validateEmail);
    email.addEventListener('focus', reset);
    password.addEventListener('blur', validatePassword);
    password.addEventListener('focus', reset);
    formButton.addEventListener('click', requestLogin);
    registerBtn.addEventListener('click', signUpHref);
}

function validateEmail(event) {
    if (emailExpression.test(event.target.value)) {
        inputStyle(event.target, 'success');
        validates.email[0] = true;
        validates.email[1] = event.target.value;
    } else {
        errorMessage(event.target, 'Email not valid');
        inputStyle(event.target, 'error');
        validates.email[0] = false;
        validates.email[1] = 'ERROR Email not valid';
    }
}

function validatePassword(event) {
    var validatePassword = event.target.value;
    if (validatePassword.length < 8 ) {
        errorMessage(event.target, 'Password need contains at least 8 characters');
        inputStyle(event.target, 'error');
        validates.password[0] = false;
        validates.password[1] = 'ERROR Password need contains at least 8 characters';
    } else if (isNumber(validatePassword) && isString(validatePassword)) {
        inputStyle(event.target, 'success');
        validates.password[0] = true;
        validates.password[1] = event.target.value;
    } else {
        errorMessage(event.target, 'Password need contains numbers and letters');
        inputStyle(event.target, 'error');
        validates.password[0] = false;
        validates.password[1] = 'ERROR Password need contains numbers and letters';
    }
}

function isString(validate) {
    for (var i = 0; i < validate.length; i++) {
        if(isNaN(validate.slice(i, i + 1))) {
            return true;
        }
    }
}

function isNumber(validate) {
    for (var i = 0; i < validate.length; i++) {
        if(!isNaN(validate.slice(i, i + 1))) {
            return true;
        }
    }
}

function reset(event) {
    inputStyle(event.target, 'reset');
    if(event.target.nextElementSibling !== null) {
        event.target.nextElementSibling.remove();
    }
}

function errorMessage(element, message = 'Error, please try again') {
    var errorMessage = document.createElement('div');
    errorMessage.textContent = message;
    errorMessage.classList.add('error-message');
    element.parentNode.appendChild(errorMessage);
}

function inputStyle(input, type) {
    if (type === 'error') {
        input.style.border = 'solid 1px #D22904'
    }
    if (type === 'success') {
        input.style.border = 'solid 1px green'
    }
    if (type === 'reset') {
        input.style.border = 'solid 1px #373867'
    }
}

function invalidForm() {
    alert(
        "Email: " + validates.email[1] +
        "\nPassword: " + validates.password[1]
    );
}

function signUpHref(event) {
    event.preventDefault();
    window.location.href = "../views/sign-up.html";
}

function validateInputs() {
    for (var element in validates) {
        if (!validates[element][0]) {
            return false;
        }
    }
    return true;
}

function requestLogin(event) {
    event.preventDefault();
    if (validateInputs()) {
        request(API_URL + '?email=' + validates.email[1] + '&password=' + validates.password[1]);
    } else {
        invalidForm();
    }
}

function request(URL) {
    var res;
    fetch(URL)
    .then(function(response) {
        res = response
        return res.json()   
    })
    .then(function(data) {
        if(data.success) {
            alert(
                "Login success: " + data.msg +
                "\nEmail: " + validates.email[1] +
                "\nPassword: " + validates.password[1]
            );
        } else {
            alert(
                "ERROR: " + data.msg +
                "\nEmail: " + validates.email[1] +
                "\nPassword: " + validates.password[1]
            );
            if (res.status < 200 || res.status > 299) {
                throw new Error('ERROR: ' + data.msg);
            } 
        }
    })
}