const boxes = document.querySelectorAll('.box');

function showBoxes() {
    const viewHeight = window.innerHeight;
    
    boxes.forEach(box => {
        const distanceTop = box.getBoundingClientRect().top;
        const boxHeight = box.getBoundingClientRect().height;

        if(viewHeight - distanceTop >= boxHeight) {
            box.classList.add('active');
        } else {
            box.classList.remove('active');
        }
    });
}

showBoxes();

window.addEventListener('scroll', showBoxes);

