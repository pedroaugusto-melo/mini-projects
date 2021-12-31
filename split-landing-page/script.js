const boxes = document.querySelectorAll('.box');

boxes.forEach(box => {
    box.addEventListener('mouseenter', () => {
       const idBoxActive = box.getAttribute('id');
       const idBoxInactive = idBoxActive === 'ps' ? 'xbox' : 'ps';
       
       document.getElementById(`${idBoxActive}`).style.width = '75%';
       document.getElementById(`${idBoxInactive}`).style.width = '25%';
    });

    box.addEventListener('mouseleave', () => {
        boxes.forEach(box => {
            box.style.width = '50%';
        });
    });
});