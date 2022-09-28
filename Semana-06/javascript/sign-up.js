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
var validates = {
    firstName: false,
    lastName: false,
    dni: false,
    birth: false,
    phone: false,
    locality: false,
    address: false,
    postalCode: false,
    email: false,
    password: false,
    repeatPassword: false,
};

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
    firstName.addEventListener('focus', function () {
        inputStyle(firstName, 'reset');
    });
    lastName.addEventListener('blur', validateLastName);
    lastName.addEventListener('focus', function () {
        inputStyle(lastName, 'reset');
    });
    dni.addEventListener('blur', validateDni);
    dni.addEventListener('focus', function () {
        inputStyle(dni, 'reset');
    });
    birth.addEventListener('blur', validateBirth);
    birth.addEventListener('focus', function () {
        inputStyle(birth, 'reset');
    });
    phone.addEventListener('blur', validatePhone);
    phone.addEventListener('focus', function () {
        inputStyle(phone, 'reset');
    });
    locality.addEventListener('blur', validateLocality);
    locality.addEventListener('focus', function () {
        inputStyle(locality, 'reset');
    });
    address.addEventListener('blur', validateAddress);
    address.addEventListener('focus', function () {
        inputStyle(address, 'reset');
    });
    postalCode.addEventListener('blur', validatePostal);
    postalCode.addEventListener('focus', function () {
        inputStyle(postalCode, 'reset');
    });
    email.addEventListener('blur', validateEmail);
    email.addEventListener('focus', function () {
        inputStyle(email, 'reset');
    });
    password.addEventListener('blur', validatePassword);
    password.addEventListener('focus', function () {
        inputStyle(password, 'reset');
    });
    repeatPassword.addEventListener('blur', validateRepeatPassword);
    repeatPassword.addEventListener('focus', function () {
        inputStyle(repeatPassword, 'reset');
    });
    formButton.addEventListener('click', register);
}

function validateFirstName(input) {
    var name = input.target.value;
    console.log(input.value);
    if (name.length < 3) {
        errorMessage('Name need contains at least 3 characters');
        inputStyle(input.target, 'error');
        validates.firstName = false;
    } else if (isNumber(name)) {
        errorMessage('Name cannot contains numbers');
        inputStyle(input.target, 'error');
        validates.firstName = false;
    } else {
        inputStyle(input.target, 'success');
        validates.firstName = true;
    }
}

function validateLastName(input) {
    var name = input.target.value;
    if (name.length < 3) {
        errorMessage('Name need contains at least 3 characters');
        inputStyle(input.target, 'error');
        validates.lastName = false;
    } else if (isNumber(name)) {
        errorMessage('Name cannot contains numbers');
        inputStyle(input.target, 'error');
        validates.lastName = false;
    } else {
        inputStyle(input.target, 'success');
        validates.lastName = true;
    }
}

function validateDni(input) {
    var validateDni = input.target.value;
    if (isNaN(validateDni)) {
        errorMessage('DNI only can contains numbers');
        inputStyle(input.target, 'error');
        validates.dni = false;
    } else if (validateDni.length < 8) {
        errorMessage('DNI need contains at least 8 characters');
        inputStyle(input.target, 'error');
        validates.dni = false;
    } else {
        inputStyle(input.target, 'success');
        validates.dni = true;
    }
}

function validateBirth(input) {
    var validateBirth = input.target.value;
    if (validateBirth === '') {
        errorMessage('Date of birth cannot be empty');
        inputStyle(input.target, 'error');
        validates.birth = false;
    } else {
        inputStyle(input.target, 'success');
        validates.birth = true;
    }
}

function validatePhone(input) {
    var validatePhone = input.target.value;
    if (isNaN(validatePhone)) {
        errorMessage('Phone only can contains numbers');
        inputStyle(input.target, 'error');
        validates.phone = false;
    } else if (validatePhone.length < 10) {
        errorMessage('Phone need contains at least 10 characters');
        inputStyle(input.target, 'error');
        validates.phone = false;
    } else {
        inputStyle(input.target, 'success');
        validates.phone = true;
    }
}

function validateLocality(input) {
    var validateLocality = input.target.value;
    if (validateLocality.length < 5) {
        errorMessage('Locality need contains at least 5 characters');
        inputStyle(input.target, 'error');
        validates.locality = false;
    } else {
        inputStyle(input.target, 'success');
        validates.locality = true;
        console.log(input.value);
    }
}

function validateAddress(input) {
    var validateAddress = input.target.value;
    if (validateAddress.length < 5) {
        errorMessage('Address need contains at least 5 characters');
        inputStyle(input.target, 'error');
        validates.address = false;
    } else if (!(isNumber(validateAddress) && isString(validateAddress))) {
        errorMessage('Address need contains numbers and letters');
        inputStyle(input.target, 'error');
        validates.address = false;
    } else if (
        validateAddress
            .substring(3, validateAddress.length - 2)
            .indexOf(' ') === -1
    ) {
        errorMessage('Address needs a space in between');
        inputStyle(input.target, 'error');
        validates.address = false;
    } else {
        inputStyle(input.target, 'success');
        validates.address = true;
        console.log(input.value);
    }
}

function validatePostal(input) {
    var validatePostal = input.target.value;
    if (isNaN(validatePostal)) {
        errorMessage('Postal code only can contains numbers');
        inputStyle(input.target, 'error');
        validates.postalCode = false;
    } else if (validatePostal.length === 4 || validatePostal.length === 5) {
        inputStyle(input.target, 'success');
        validates.postalCode = true;
    } else {
        errorMessage('Postal code need contains 4-5 characters');
        inputStyle(input.target, 'error');
        validates.postalCode = false;
    }
}

function validateEmail(input) {
    if (emailExpression.test(input.target.value)) {
        inputStyle(input.target, 'success');
        validates.email = true;
    } else {
        errorMessage('Email not valid');
        inputStyle(input.target, 'error');
        validates.email = false;
    }
}

function validatePassword(input) {
    var validatePassword = input.target.value;
    if (validatePassword.length < 8) {
        errorMessage('Password need contains at least 8 characters');
        inputStyle(input.target, 'error');
        validates.password = false;
    } else if (isNumber(validatePassword) && isString(validatePassword)) {
        inputStyle(input.target, 'success');
        validates.password = true;
    } else {
        errorMessage('Password need contains numbers and letters');
        inputStyle(input.target, 'error');
        validates.password = false;
    }
}

function validateRepeatPassword(input) {
    var validatePassword = input.target.value;
    if (validatePassword.length === 0) {
        errorMessage('Password cannot be empty');
        inputStyle(input.target, 'error');
        validates.repeatPassword = false;
    } else if (input.target.value === password.value) {
        inputStyle(input.target, 'success');
        validates.repeatPassword = true;
    } else {
        errorMessage('Passwords not match');
        inputStyle(input.target, 'error');
        validates.repeatPassword = false;
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

function errorMessage(message = 'Error, please try again') {
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
        input.style.border = 'solid 1px #D22904';
    }
    if (type === 'success') {
        input.style.border = 'solid 1px green';
    }
    if (type === 'reset') {
        input.style.border = 'solid 1px #373867';
    }
}

function register() {
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
    )
}