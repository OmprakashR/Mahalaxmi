
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
                const newIndex = currentIndex + direction;

                if (newIndex < 0) {
                    currentIndex = slides.length - 1; // Loop back to the last slide
                } else if (newIndex >= slides.length) {
                    currentIndex = 0; // Loop back to the first slide
                } else {
                    currentIndex = newIndex;
                }

                slider.style.transform = `translateX(-${slideWidth * currentIndex}px)`;
                slider.style.transition = 'transform 0.5s ease-in-out';
                updateCount();
                updateProgressBar();
            }

            function appendFirstSlide() {
                const firstSlide = slides[0].cloneNode(true);
                slider.appendChild(firstSlide);
            }

            // Append the first slide after the last slide
            appendFirstSlide();

            // Event listeners
            prevButton.addEventListener('click', () => scrollSlide(-1));
            nextButton.addEventListener('click', () => scrollSlide(1));

            // Initial update
            updateCount();
            updateProgressBar();
        });

    // menu functionality add dynamically updated chnages 

      document.addEventListener('DOMContentLoaded', () => {
      const mobileMenuButton = document.getElementById('mobile-menu-button');
      const mobileMenu = document.getElementById('mobile-menu');

      if (mobileMenuButton && mobileMenu) {
        mobileMenuButton.addEventListener('click', () => {
          mobileMenu.classList.toggle('hidden');
        });
      }
    });