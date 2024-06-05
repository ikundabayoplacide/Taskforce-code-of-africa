const images = document.querySelectorAll('.image');

images.forEach(image => {
  image.addEventListener('click', () => {
    image.classList.toggle('active');
});
});