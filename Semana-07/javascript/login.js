var email;
var password;
var alerts;
var emailExpression;

window.onload = function() {
    variables();
    eventsListeners();
}

function variables() {
    email = document.querySelector('.email');
    password = document.querySelector('.password');
    alerts = document.querySelector('.alerts');
    emailExpression = /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/;
}

function eventsListeners() {
    email.addEventListener('blur', validateEmail)
    email.addEventListener('focus', function() {
        inputStyle(email, 'reset')
    })
    password.addEventListener('blur', validatePassword)
    password.addEventListener('focus', function() {
        inputStyle(password, 'reset')
    })
}

function validateEmail(input) {
    if (emailExpression.test(input.target.value)) {
        inputStyle(input.target, 'success');
    } else {
        errorMessage('Email not valid');
        inputStyle(input.target, 'error');
    }
}

function validatePassword(input) {
    var validatePassword = input.target.value;
    if (validatePassword.length < 8 ) {
        errorMessage('Password need contains at least 8 characters');
        inputStyle(input.target, 'error');
    } else if (isNumber(validatePassword) && isString(validatePassword)) {
        inputStyle(input.target, 'success');
    } else {
        errorMessage('Password need contains numbers and letters');
        inputStyle(input.target, 'error');
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

function errorMessage(message='Error, please try again') {
    var errorMessage = document.createElement('div');
    errorMessage.textContent = message;
    errorMessage.classList.add('error-message');
    alerts.appendChild(errorMessage);
    setTimeout(() => {
        errorMessage.remove();
    }, 4000);
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