var email = document.querySelector('.email');
var password = document.querySelector('.password');
var emailExpression = /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/;

email.addEventListener('blur', validateEmail)

// TODO: ADD FOCUS
password.addEventListener('blur', validatePassword)

function validateEmail(input) {
    if (emailExpression.test(input.target.value)) {
        inputStyle(input.target, 'success');
    } else {
        errorMessage('Email not valid');
        inputStyle(input.target, 'error');
    }
}

function validatePassword(input) {
    var password = input.target.value;
    if (password.length >= 8 && validateNumber(password) && validateString(password)) {
        inputStyle(input.target, 'success');
    } else {
        errorMessage('Password not valid');
        inputStyle(input.target, 'error');
    }
}

function validateString(validate) {
    for (var i = 0; i < validate.length; i++) {
        if(isNaN(validate.slice(i, i + 1))) {
            return true;
        }
    }
}

function validateNumber(validate) {
    for (var i = 0; i < validate.length; i++) {
        if(!isNaN(validate.slice(i, i + 1))) {
            return true;
        }
    }
}

// TODO: Add logic to support multiple error messages

function errorMessage(message='Error, please try again') {
    if (document.querySelector('.error-message') === null) {
        var errorMessage = document.createElement('div');
        errorMessage.textContent = message;
        errorMessage.classList.add('error-message');
        document.body.appendChild(errorMessage);
        setTimeout(() => {
            errorMessage.remove();
        }, 4000);
    }
}

function inputStyle(input, type) {
    if (type === 'error') {
        input.style.border = 'solid 1px #D22904'
    }
    if (type === 'success') {
        input.style.border = 'solid 1px #373867'
    }
}