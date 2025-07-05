// const slides = document.getElementById('slides');
//     const totalSlides = slides.children.length;
//     let current = 0;

//     function moveSlide(direction) {
//       current = (current + direction + totalSlides) % totalSlides;
//       slides.style.transform = `translateX(-${current * 100}%)`;
//     }



const slides = document.getElementById('slides');
    const totalSlides = slides.children.length;
    let current = 0;
    let intervalId;

    function moveSlide(direction) {
      current = (current + direction + totalSlides) % totalSlides;
      updateSlide();
      resetInterval();
    }

    function updateSlide() {
      slides.style.transform = `translateX(-${current * 100}%)`;
    }

    function autoSlide() {
      current = (current + 1) % totalSlides;
      updateSlide();
    }

    function resetInterval() {
      clearInterval(intervalId);
      intervalId = setInterval(autoSlide, 100000);
    }

    // Iniciar auto-slide
    intervalId = setInterval(autoSlide, 100000);