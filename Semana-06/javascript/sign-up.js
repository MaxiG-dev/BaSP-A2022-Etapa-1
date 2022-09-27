var firstName;
var lastName;
var dni;
var birth;
var phone;
var locality;
var address;
var postalCode;
var email;
var password;
var repeatPassword;
var alerts;
var emailExpression;


// Nombre: Solo letras y debe tener más de 3 letras.
// Apellido: Solo letras y debe tener más de 3 letras. 
// DNI: Solo número y debe tener más de 7 números. 
// Fecha de Nacimiento: Con formato dd/mm/aaaa.
// Teléfono: Solo número y debe tener 10 números.
// Dirección: Al menos 5 caracteres con letras, números y un espacio en el medio.
// Localidad: Texto alfanumérico y debe tener más de 3 letras. 
// Código Postal: Solo número y debe tener entre 4 y 5 números. 
// Email: Debe tener un formato de email válido.
// Contraseña: Al menos 8 caracteres, formados por letras y números.
// Repetir Contraseña: Al menos 8 caracteres, formados por letras y números.

window.onload = function() {
    variables();
    eventsListeners();
}

function variables() {
    firstName = document.querySelector('.first-name');
    lastName = document.querySelector('.last-name');
    dni = document.querySelector('.dni');
    birth = document.querySelector('.birth');
    phone = document.querySelector('.phone');
    locality = document.querySelector('.locality');
    address = document.querySelector('.address');
    postalCode = document.querySelector('.postal-code');
    email = document.querySelector('.email');
    password = document.querySelector('.password');
    repeatPassword = document.querySelector('.repeat-password');
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
    repeatPassword.addEventListener('blur', validateRepeatPassword)
    repeatPassword.addEventListener('focus', function() {
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

function validateRepeatPassword(input) {
    var validatePassword = input.target.value;
    if (validatePassword.length === 0 ) {
        errorMessage('Password cannot be empty');
        inputStyle(input.target, 'error');
    } else if (input.target.value === password.value) {
        inputStyle(input.target, 'success');
    } else {
        errorMessage('Passwords not match');
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