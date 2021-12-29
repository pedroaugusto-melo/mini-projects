const btn = document.getElementById('search-icon');
const content = document.getElementById('content');

let active = false;

btn.addEventListener('click', () => {
    if(!active) {
        active = true;
        content.classList.add('active');
    } else {
        active = false;
        content.classList.remove('active');
    }
});

