//Select element function
const selectElement = function (element) {
    return document.querySelector(element);

};

let menuToggler = selectElement('.menu-toggle');
let body = selectElement('body');

menuToggler.addEventListener('click', function(){
    body.classList.toggle('open');
});


//scroll reveal//
window.sr = SrollReveal();

sr.reveal('.animate-left',{
    origin:'left',
    duration: 1000,
    distance:'25rem',
    delay:300
});


sr.reveal('.animate-right', {
    origin: 'right',
    duration: 1000,
    distance: '25rem',
    delay: 600
});


sr.reveal('.animate-top', {
    origin: 'top',
    duration: 1000,
    distance: '25rem',
    delay: 600
});


sr.reveal('.animate-bottom', {
    origin: 'bottom',
    duration: 1000,
    distance: '25rem',
    delay: 600
});

document.addEventListener('DOMContentLoaded', () => {

    const themeStylesheet = document.getElementById('theme');
    const themeToggle = document.getElementById('theme-toggle');
    themeToggle.addEventListener('click', () => {
        // if it's light -> go dark
        if (themeStylesheet.href.includes('light')) {
            themeStylesheet.href = 'dark-theme.css';
            themeToggle.innerText = 'Switch to light mode';
        } else {
            // if it's dark -> go light
            themeStylesheet.href = 'light-theme.css';
            themeToggle.innerText = 'Switch to dark mode';

        }
    })
});
