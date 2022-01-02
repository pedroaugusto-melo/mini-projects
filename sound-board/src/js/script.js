const btns = document.querySelectorAll('.btn');
const song = document.getElementById('song');

btns.forEach(btn => {
    btn.addEventListener('click', () => {
        btnScale(btn);
        song.setAttribute('src', `./src/sounds/${btn.getAttribute('id')}.mp3`);
        song.play();
    });
});

function btnScale(btn) {
    btn.style.transform = 'scale(0.9)';
    setTimeout(() => {
        btn.style.transform = 'scale(1)';
    }, 200);
}

