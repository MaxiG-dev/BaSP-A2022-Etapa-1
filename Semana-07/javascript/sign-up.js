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
    firstName: [false, 'ERROR First name cannot be empty'],
    lastName: [false, 'ERROR Last name cannot be empty'],
    dni: [false, 'ERROR DNI cannot be empty'],
    birth: [false, 'ERROR Date of birth cannot be empty'],
    phone: [false, 'ERROR Phone cannot be empty'],
    locality: [false, 'ERROR Locality cannot be empty'],
    address: [false, 'ERROR Address cannot be empty'],
    postalCode: [false, 'ERROR Postal code cannot be empty'],
    email: [false, 'ERROR Email cannot be empty'],
    password: [false, 'ERROR Password cannot be empty'],
    repeatPassword: [false, 'ERROR Repeat password cannot be empty'],
}

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
        errorMessage(event.target, 'First name need contains at least 4 characters');
        inputStyle(event.target, 'error');
        validates.firstName[0] = false;
        validates.firstName[1] = 'ERROR First name need contains at least 4 characters';
    } else if (isNumber(name)) {
        errorMessage(event.target, 'First name cannot contains numbers');
        inputStyle(event.target, 'error');
        validates.firstName[0] = false;
        validates.firstName[1] = 'First name cannot contains numbers';
    } else {
        inputStyle(event.target, 'success');
        validates.firstName[0] = true;
        validates.firstName[1] = event.target.value;
    }
}

function validateLastName(event) {
    var name = event.target.value;
    if (name.length < 4) {
        errorMessage(event.target, 'Last name need contains at least 4 characters');
        inputStyle(event.target, 'error');
        validates.lastName[0] = false;
        validates.lastName[1] = 'ERROR Last name need contains at least 4 characters';
    } else if (isNumber(name)) {
        errorMessage(event.target, 'Last name cannot contains numbers');
        inputStyle(event.target, 'error');
        validates.lastName[0] = false;
        validates.lastName[1] = 'ERROR Last name cannot contains numbers';
    } else {
        inputStyle(event.target, 'success');
        validates.lastName[0] = true;
        validates.lastName[1] = event.target.value;
    }
}

function validateDni(event) {
    var validateDni = event.target.value;
    if (isNaN(validateDni)) {
        errorMessage(event.target, 'DNI only can contains numbers');
        inputStyle(event.target, 'error');
        validates.dni[0] = false;
        validates.dni[1] = 'ERROR DNI only can contains numbers';
    } else if (validateDni.length === 8) {
        inputStyle(event.target, 'success');
        validates.dni[0] = true;
        validates.dni[1] = event.target.value;
    } else {
        errorMessage(event.target, 'DNI need contains 8 characters');
        inputStyle(event.target, 'error');
        validates.dni[0] = false;
        validates.dni[1] = 'ERROR DNI need contains 8 characters';
    }
}

function validateBirth(event) {
    var validateBirth = event.target.value;
    if (validateBirth === '') {
        errorMessage(event.target, 'Date of birth cannot be empty');
        inputStyle(event.target, 'error');
        validates.birth[0] = false;
        validates.birth[1] = 'ERROR Date of birth cannot be empty';
    } else {
        inputStyle(event.target, 'success');
        validates.birth[0] = true;
        validates.birth[1] = event.target.value;
    }
}

function validatePhone(event) {
    var validatePhone = event.target.value;
    if (isNaN(validatePhone)) {
        errorMessage(event.target, 'Phone only can contains numbers');
        inputStyle(event.target, 'error');
        validates.phone[0] = false;
        validates.phone[1] = 'ERROR Phone only can contains numbers';
    } else if (validatePhone.length === 10) {
        inputStyle(event.target, 'success');
        validates.phone[0] = true;
        validates.phone[1] = event.target.value;
    } else {
        errorMessage(event.target, 'Phone need contains 10 characters');
        inputStyle(event.target, 'error');
        validates.phone[0] = false;
        validates.phone[1] = 'ERROR Phone need contains 10 characters';
    }
}

function validateLocality(event) {
    var validateLocality = event.target.value;
    if (validateLocality.length < 3) {
        errorMessage(event.target, 'Locality need contains at least 3 characters');
        inputStyle(event.target, 'error');
        validates.locality[0] = false;
        validates.locality[1] = 'ERROR Locality need contains at least 3 characters';
    } else {
        inputStyle(event.target, 'success');
        validates.locality[0] = true;
        validates.locality[1] = event.target.value;
    }
}

function validateAddress(event) {
    var validateAddress = event.target.value;
    if (validateAddress.length < 5) {
        errorMessage(event.target, 'Address need contains at least 5 characters');
        inputStyle(event.target, 'error');
        validates.address[0] = false;
        validates.address[1] = 'ERROR Address need contains at least 5 characters';
    } else if (!(isNumber(validateAddress) && isString(validateAddress))) {
        errorMessage(event.target, 'Address need contains numbers and letters');
        inputStyle(event.target, 'error');
        validates.address[0] = false;
        validates.address[1] = 'ERROR Address need contains numbers and letters';
    } else if (validateAddress.substring(1, validateAddress.length - 1).indexOf(' ') === -1) {
        errorMessage(event.target, 'Address needs a space in between');
        inputStyle(event.target, 'error');
        validates.address[0] = false;
        validates.address[1] = 'ERROR Address needs a space in between';
    } else {
        inputStyle(event.target, 'success');
        validates.address[0] = true;
        validates.address[1] = event.target.value;
    }
}

function validatePostal(event) {
    var validatePostal = event.target.value;
    if (isNaN(validatePostal)) {
        errorMessage(event.target, 'Postal code only can contains numbers');
        inputStyle(event.target, 'error');
        validates.postalCode[0] = false;
        validates.postalCode[1] = 'ERROR Postal code only can contains numbers';
    } else if (validatePostal.length === 4 || validatePostal.length === 5) {
        inputStyle(event.target, 'success');
        validates.postalCode[0] = true;
        validates.postalCode[1] = event.target.value;
    } else {
        errorMessage(event.target, 'Postal code need contains 4-5 characters');
        inputStyle(event.target, 'error');
        validates.postalCode[0] = false;
        validates.postalCode[1] = 'ERROR Postal code need contains 4-5 characters';
    }
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
    if (validatePassword.length < 8) {
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

function validateRepeatPassword(event) {
    var validatePassword = event.target.value;
    if (validatePassword.length < 8) {
        errorMessage(event.target, 'Repeat password need contains at least 8 characters');
        inputStyle(event.target, 'error');
        validates.repeatPassword[0] = false;
        validates.repeatPassword[1] = 'ERROR Repeat password need contains at least 8 characters';
    } else if (event.target.value === password.value) {
        inputStyle(event.target, 'success');
        validates.repeatPassword[0] = true;
        validates.repeatPassword[1] = event.target.value;
    } else {
        errorMessage(event.target, 'Passwords not match');
        inputStyle(event.target, 'error');
        validates.repeatPassword[0] = false;
        validates.repeatPassword[1] = 'ERROR Passwords not match';
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
        "First name: " + validates.firstName[1] +
        "\nLast name: " + validates.lastName[1] +
        "\nDNI: " + validates.dni[1] +
        "\nDate of birth: " + validates.birth[1] +
        "\nPhone: " + validates.phone[1] +
        "\nLocality: " + validates.locality[1] +
        "\nAddress: " + validates.address[1] +
        "\nPostal code: " + validates.postalCode[1] +
        "\nEmail: " + validates.email[1] +
        "\nPassword: " + validates.password[1] +
        "\nRepeat password: " + validates.repeatPassword[1]
    );
}