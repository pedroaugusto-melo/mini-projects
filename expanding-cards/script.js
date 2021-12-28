const images = document.querySelectorAll('.image');

images.forEach(image => {
    image.addEventListener('click', () => {
        removeActiveImage(images);
        image.classList.add('active');
    });
});

function removeActiveImage(images) {
    images.forEach(image => {
        image.classList.remove('active');
    });
}