
  // Simple JavaScript to handle carousel functionality
  const carouselItems = document.querySelectorAll('.carousel-item');
  let currentIndex = 0;

  function showSlide(index) {
    carouselItems.forEach((item, i) => {
      item.classList.toggle('hidden', i !== index); // Hide all slides except the active one
    });
  }

  function nextSlide() {
    currentIndex = (currentIndex + 1) % carouselItems.length;
    showSlide(currentIndex);
  }

  function prevSlide() {
    currentIndex = (currentIndex - 1 + carouselItems.length) % carouselItems.length;
    showSlide(currentIndex);
  }

  // Add event listeners to buttons
  document.querySelector('.carousel-control-prev').addEventListener('click', prevSlide);
  document.querySelector('.carousel-control-next').addEventListener('click', nextSlide);

  // Automatically cycle through slides every 5 seconds
  setInterval(nextSlide, 5000);

  // Show the first slide initially
  showSlide(currentIndex);
