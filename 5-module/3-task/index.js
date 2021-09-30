function initCarousel() {
  // ваш код...
  let carouselRight = document.querySelector('.carousel__arrow_right');
  let carouselLeft = document.querySelector('.carousel__arrow_left');
  let carouselInner = document.querySelector('.carousel__inner');
  let carouselSlide = document.querySelectorAll('.carousel__slide');
  let counter = 0;

  setArrow();

  carouselRight.addEventListener('click', () => {
    counter++;
    carouselInner.style.transform = `translateX(-${counter * carouselInner.offsetWidth}px)`;
    setArrow();
  });

  carouselLeft.addEventListener('click', () => {
    counter--;
    carouselInner.style.transform = `translateX(-${counter * carouselInner.offsetWidth}px)`;
    setArrow();
  });

  function setArrow(){
    if (counter === 0) {
      carouselLeft.style.display = 'none';
    } else {
      carouselLeft.style.display = '';
    }
  
    if (counter >= carouselSlide.length -1) {
      carouselRight.style.display = 'none';
    } else {
      carouselRight.style.display = '';
    }
  }
}