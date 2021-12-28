const btnNext = document.getElementById('next');
const btnPrev = document.getElementById('prev');
const btnReset = document.getElementById('reset');
const progBar = document.getElementById('progress-bar');
const circles = document.querySelectorAll('.circle');

let currentProgress = 0;

function incProgress() {
    if(currentProgress <= 2){
        currentProgress++;
        progBar.style.width = `${2 + (currentProgress * 10)}rem`;
        circles[currentProgress].classList.add('active');
    }
}

function decProgess() {
    if(currentProgress >= 1){
        currentProgress--;
        progBar.style.width = `${2 + (currentProgress * 10)}rem`;
        circles[currentProgress + 1].classList.remove('active');
    }
}

btnNext.addEventListener('click', incProgress);

btnPrev.addEventListener('click', decProgess);

btnReset.addEventListener('click', () => {
    while(currentProgress > 0) decProgess();
});