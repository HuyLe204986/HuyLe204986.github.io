var logIn = document.querySelector('.js-login');
var signUp = document.querySelector('.js-signup');
var modal = document.querySelector('.js-modal');
var modalContainer = document.querySelector('.js-modal-container')

var formLogIn = document.querySelector('.auth-form:last-child');
var formSignUp = document.querySelector('.auth-form:first-child');


var isLogIn ;
var isSignUp;

function showLogIn() {
    modal.classList.remove('close');
    formSignUp.classList.add('close');
    isLogIn = true;
    isSignUp = false;
}

function showSignUp() {
    modal.classList.remove('close');
    formLogIn.classList.add('close');
    isLogIn = false;
    isSignUp = true;
}

logIn.addEventListener('click', showLogIn);
signUp.onclick = showSignUp;


function hide() {
    modal.classList.add('close'); 
    if(!isLogIn && isSignUp) {
        formLogIn.classList.remove('close');
    }else if(!isSignUp && isLogIn) {
        formSignUp.classList.remove('close');
    }
}

var closeForms = document.querySelectorAll('.js-auth-form__close');

for (var key in closeForms) {
    closeForms[key].onclick = hide;
}


modal.addEventListener('click',hide);

modalContainer.addEventListener('click', function(event) {
    event.stopPropagation();
})