const btnShow = document.getElementById('show');
const btnHide = document.getElementById('hide');
const menu = document.getElementById('menu');
const icons = document.getElementById('icons');
const content = document.querySelector('main');

btnShow.addEventListener('click', () => {
    icons.classList.add('nav-active');
    menu.classList.add('nav-active');
    content.classList.add('nav-active');
});

btnHide.addEventListener('click', () => {
    icons.classList.remove('nav-active');
    menu.classList.remove('nav-active');
    content.classList.remove('nav-active');
});