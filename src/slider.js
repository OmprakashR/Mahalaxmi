
// js for modal functionality add dymically video id

    function openModal(videoId) {
      const modal = document.getElementById('videoModal');
      const iframe = document.getElementById('videoFrame');

      // Set the video URL dynamically
      iframe.src = `https://www.youtube.com/embed/${videoId}`;

      modal.classList.remove('hidden');
    }

    function closeModal() {
      const modal = document.getElementById('videoModal');
      const iframe = document.getElementById('videoFrame');

      // Hide the modal and stop the video
      modal.classList.add('hidden');
      iframe.src = '';
    }

// js for glightbox
     const lightbox = GLightbox({
            alertLoading: false,
            loop: true,
            touchNavigation: true,
            openEffect: 'zoom',
            closeEffect: 'zoom',
            selector: '.glightbox',
            zoomable: true,
        });
         


        //updatd slider js
        document.querySelectorAll('.slider-container').forEach(container => {
            const slider = container.querySelector('.slider');
            const countDisplay = container.querySelector('.slide-count');
            const progressBar = container.querySelector('.progress-bar');
            const slides = slider.querySelectorAll('.slider-box');
            const prevButton = container.querySelector('.prev-slide');
            const nextButton = container.querySelector('.next-slide');
            let currentIndex = 0;

            function updateCount() {
                const total = slides.length;
                countDisplay.textContent = `${String(currentIndex + 1).padStart(2, '0')} / ${String(total).padStart(2, '0')}`;
            }

            function updateProgressBar() {
                const total = slides.length;
                const progress = ((currentIndex + 1) / total) * 100;
                progressBar.style.width = `${progress}%`;
            }

            function scrollSlide(direction) {
                const slideWidth = slides[0].offsetWidth + 24; // 24 is approx gap
                currentIndex = Math.max(0, Math.min(currentIndex + direction, slides.length - 1));
                slider.style.transform = `translateX(-${slideWidth * currentIndex}px)`;
                slider.style.transition = 'transform 0.5s ease-in-out';
                updateCount();
                updateProgressBar();
            }

            function resetSliderToStart() {
                currentIndex = 0;
                slider.style.transform = `translateX(0px)`;
                slider.style.transition = 'transform 0.5s ease-in-out';
                updateCount();
                updateProgressBar();
            }

            // Event listeners
            prevButton.addEventListener('click', () => scrollSlide(-1));
            nextButton.addEventListener('click', () => {
                if (currentIndex === slides.length - 1) {
                    resetSliderToStart();
                } else {
                    scrollSlide(1);
                }
            });

            // Initial update
            updateCount();
            updateProgressBar();
        });
