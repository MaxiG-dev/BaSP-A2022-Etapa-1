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
var formButton;

window.onload = function () {
    variables();
    eventsListeners();
};

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
    formButton = document.querySelector('.form-button');
    emailExpression = /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/;
}

function eventsListeners() {
    firstName.addEventListener('blur', validateFirstName);
    firstName.addEventListener('focus', reset);
    lastName.addEventListener('blur', validateLastName);
    lastName.addEventListener('focus', reset);
    dni.addEventListener('blur', validateDni);
    dni.addEventListener('focus', reset);
    birth.addEventListener('blur', validateBirth);
    birth.addEventListener('focus', reset);
    phone.addEventListener('blur', validatePhone);
    phone.addEventListener('focus', reset);
    locality.addEventListener('blur', validateLocality);
    locality.addEventListener('focus', reset);
    address.addEventListener('blur', validateAddress);
    address.addEventListener('focus', reset);
    postalCode.addEventListener('blur', validatePostal);
    postalCode.addEventListener('focus', reset);
    email.addEventListener('blur', validateEmail);
    email.addEventListener('focus', reset);
    password.addEventListener('blur', validatePassword);
    password.addEventListener('focus', reset);
    repeatPassword.addEventListener('blur', validateRepeatPassword);
    repeatPassword.addEventListener('focus', reset);
    formButton.addEventListener('click', register);
}

function validateFirstName(event) {
    var name = event.target.value;
    if (name.length < 4) {
        errorMessage(event.target, 'Name need contains at least 4 characters');
        inputStyle(event.target, 'error');
    } else if (isNumber(name)) {
        errorMessage(event.target, 'Name cannot contains numbers');
        inputStyle(event.target, 'error');
    } else {
        inputStyle(event.target, 'success');
    }
}

function validateLastName(event) {
    var name = event.target.value;
    if (name.length < 4) {
        errorMessage(event.target, 'Name need contains at least 4 characters');
        inputStyle(event.target, 'error');
    } else if (isNumber(name)) {
        errorMessage(event.target, 'Name cannot contains numbers');
        inputStyle(event.target, 'error');
    } else {
        inputStyle(event.target, 'success');
    }
}

function validateDni(event) {
    var validateDni = event.target.value;
    if (isNaN(validateDni)) {
        errorMessage(event.target, 'DNI only can contains numbers');
        inputStyle(event.target, 'error');
    } else if (validateDni.length === 8) {
        inputStyle(event.target, 'success');
    } else {
        errorMessage(event.target, 'DNI need contains 8 characters');
        inputStyle(event.target, 'error');
    }
}

function validateBirth(event) {
    var validateBirth = event.target.value;
    if (validateBirth === '') {
        errorMessage(event.target, 'Date of birth cannot be empty');
        inputStyle(event.target, 'error');
    } else {
        inputStyle(event.target, 'success');
    }
}

function validatePhone(event) {
    var validatePhone = event.target.value;
    if (isNaN(validatePhone)) {
        errorMessage(event.target, 'Phone only can contains numbers');
        inputStyle(event.target, 'error');
    } else if (validatePhone.length === 10) {
        inputStyle(event.target, 'success');
    } else {
        errorMessage(event.target, 'Phone need contains 10 characters');
        inputStyle(event.target, 'error');
    }
}

function validateLocality(event) {
    var validateLocality = event.target.value;
    if (validateLocality.length < 5) {
        errorMessage(event.target, 'Locality need contains at least 5 characters');
        inputStyle(event.target, 'error');
    } else {
        inputStyle(event.target, 'success');
    }
}

function validateAddress(event) {
    var validateAddress = event.target.value;
    if (validateAddress.length < 5) {
        errorMessage(event.target, 'Address need contains at least 5 characters');
        inputStyle(event.target, 'error');
    } else if (!(isNumber(validateAddress) && isString(validateAddress))) {
        errorMessage(event.target, 'Address need contains numbers and letters');
        inputStyle(event.target, 'error');
    } else if (validateAddress.substring(1, validateAddress.length - 1).indexOf(' ') === -1) {
        errorMessage(event.target, 'Address needs a space in between');
        inputStyle(event.target, 'error');
    } else {
        inputStyle(event.target, 'success');
    }
}

function validatePostal(event) {
    var validatePostal = event.target.value;
    if (isNaN(validatePostal)) {
        errorMessage(event.target, 'Postal code only can contains numbers');
        inputStyle(event.target, 'error');
    } else if (validatePostal.length === 4 || validatePostal.length === 5) {
        inputStyle(event.target, 'success');
    } else {
        errorMessage(event.target, 'Postal code need contains 4-5 characters');
        inputStyle(event.target, 'error');
    }
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
    if (validatePassword.length < 8) {
        errorMessage(event.target, 'Password need contains at least 8 characters');
        inputStyle(event.target, 'error');
    } else if (isNumber(validatePassword) && isString(validatePassword)) {
        inputStyle(event.target, 'success');
    } else {
        errorMessage(event.target, 'Password need contains numbers and letters');
        inputStyle(event.target, 'error');
    }
}

function validateRepeatPassword(event) {
    var validatePassword = event.target.value;
    if (validatePassword.length < 8) {
        errorMessage(event.target, 'Repeat password need contains at least 8 characters');
        inputStyle(event.target, 'error');
    } else if (event.target.value === password.value) {
        inputStyle(event.target, 'success');
    } else {
        errorMessage(event.target, 'Passwords not match');
        inputStyle(event.target, 'error');
    }
}

function isString(validate) {
    for (var i = 0; i < validate.length; i++) {
        if (isNaN(validate.slice(i, i + 1))) {
            return true;
        }
    }
}

function isNumber(validate) {
    for (var i = 0; i < validate.length; i++) {
        if (!isNaN(validate.slice(i, i + 1))) {
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

function inputStyle(event, type) {
    if (type === 'error') {
        event.style.border = 'solid 1px #D22904';
    }
    if (type === 'success') {
        event.style.border = 'solid 1px green';
    }
    if (type === 'reset') {
        event.style.border = 'solid 1px #373867';
    }
}

function register(event) {
    event.preventDefault();
    alert(
        "First name: " + firstName.value +
        "\nLast name: " + lastName.value +
        "\nDNI: " + dni.value +
        "\nDate of birth: " + birth.value +
        "\nPhone: " + phone.value +
        "\nLocality: " + locality.value +
        "\nAddress: " + address.value +
        "\nPostal code: " + postalCode.value +
        "\nEmail: " + email.value +
        "\nPassword: " + password.value +
        "\nRepeat password: " + repeatPassword.value
    );
}