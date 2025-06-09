let currentSlideIndex = 0;
const slides = document.querySelectorAll('.carousel-slide');
const totalSlides = slides.length;
const currentSlideDisplay = document.getElementById('current-slide');
const progressBar = document.getElementById('progress-bar');

function updateCarousel() {
    slides.forEach((slide, index) => {
        slide.classList.toggle('active', index === currentSlideIndex);
    });
    currentSlideDisplay.textContent = currentSlideIndex + 1;
    updateProgressBar();
}

function updateProgressBar() {
    const progress = ((currentSlideIndex + 1) / totalSlides) * 100;
    progressBar.style.width = `${progress}%`;
}

function nextSlide() {
    currentSlideIndex = (currentSlideIndex + 1) % totalSlides;
    updateCarousel();
}

function prevSlide() {
    currentSlideIndex = (currentSlideIndex - 1 + totalSlides) % totalSlides;
    updateCarousel();
}

updateCarousel();
