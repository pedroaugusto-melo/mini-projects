const background = document.getElementById('background-img');
const counter = document.getElementById('counter');
let counterNumber = 0;

function updateCounter(){
    background.style.opacity = `${counterNumber/100}`;
    counter.style.opacity = `${1 - counterNumber/100}`;
    counter.innerHTML = `${counterNumber}%`;
    

    counterNumber++;
    
    if(counterNumber <= 100){
        window.requestAnimationFrame(updateCounter);
    }
}

window.requestAnimationFrame(updateCounter);