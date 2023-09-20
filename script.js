window.onload = function() {
    let sliderImages = array.from(document.querySelectorAll('#slider img'));
    let index = 0;

    function showImage(i) {
        sliderImages.forEach(img => img.classList.remove('active'));
        sliderImages[i].classList.add('active');
    }

    function showNextImage() {
        index = (index + 1) % sliderImages.length;
        showImage(index);
    }

    function showPrevImage() {
        index = (index - 1 + sliderImages.length) % sliderImages.length;
        showImage(index);
    }

    document.getElementById('prev').addEventListener('click', showPrevImage);
    document.getElementById('next').addEventListener('click', showNextImage);

    showImage(0);
}