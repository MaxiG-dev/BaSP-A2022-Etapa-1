var email = document.querySelector('.email');
var password = document.querySelector('.password');
var remember = document.querySelector('.remember');
var emailExpression = /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/;


function error(message='Error, please try again') {
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