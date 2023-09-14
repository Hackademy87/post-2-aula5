const wrapper = document.querySelector('.wrapper');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');
const btnPopup = document.querySelector('.btnLogin-popup');
const iconClose = document.querySelector('.icon-close');
let cards = document.querySelectorAll(".card");
let wrappercards = document.querySelector("#wrappercards");
console.log (wrappercards)
registerLink.addEventListener('click', ()=> {
    wrapper.classList.add('active');
});

loginLink.addEventListener('click', ()=> {
    wrapper.classList.remove('active');

});

btnPopup.addEventListener('click', ()=> {
    wrapper.classList.remove("d-none")
    wrapper.classList.add('active-popup');
    wrappercards.classList.add("d-none");
});

iconClose.addEventListener('click', ()=> {
    wrapper.classList.remove('active-popup');
    setTimeout(() => {
     wrapper.classList.add("d-none")   
    }, 500);
    setTimeout(() => {
    wrappercards.classList.remove("d-none");
        
    }, 500);

});

