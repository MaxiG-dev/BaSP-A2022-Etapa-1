var email;
var password;
var alerts;
var emailExpression;
var formButton;
var registerBtn;

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
}

function eventsListeners() {
    email.addEventListener('blur', validateEmail);
    email.addEventListener('focus', reset);
    password.addEventListener('blur', validatePassword);
    password.addEventListener('focus', reset);
    formButton.addEventListener('click', login);
    registerBtn.addEventListener('click', signUpHref);
}

function validateEmail(event) {
    if (emailExpression.test(event.target.value)) {
        inputStyle(event.target, 'success');
    } else {
        errorMessage(event.target, 'Email not valid');
        inputStyle(event.target, 'error');
    }
}

function validatePassword(event) {
    var validatePassword = event.target.value;
    if (validatePassword.length < 8 ) {
        errorMessage(event.target, 'Password need contains at least 8 characters');
        inputStyle(event.target, 'error');
    } else if (isNumber(validatePassword) && isString(validatePassword)) {
        inputStyle(event.target, 'success');
    } else {
        errorMessage(event.target, 'Password need contains numbers and letters');
        inputStyle(event.target, 'error');
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

function login(event) {
    event.preventDefault();
    alert(
        "Email: " + email.value +
        "\nPassword: " + password.value
    );
}

function signUpHref(event) {
    event.preventDefault();
    window.location.href = "../views/sign-up.html";
};