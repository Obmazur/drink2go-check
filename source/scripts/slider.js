const sliderElement = document.querySelector('.slider');
const slideElements = sliderElement.querySelectorAll('.slider__slide');
const activeSlide = 'slider__slide--active';
const slideCount = slideElements.length;
const controlButtonElements = sliderElement.querySelectorAll('.pagination__button');
const prevButtonElement = sliderElement.querySelector('.slider-button-prev');
const nextButtonElement = sliderElement.querySelector('.slider-button-next');
const activeButton = 'pagination__button--active';
const inactiveButton = 'aria-disabled';

let currentSlide = 0;

const updateSlider = () => {
  slideElements.forEach((slide, index) => {
    if(index === currentSlide) {
      slide.classList.add(activeSlide);
    } else {
      slide.classList.remove(activeSlide);
    }
  });

  controlButtonElements.forEach((button, index) => {
    if (index === currentSlide) {
      button.classList.add(activeButton);
    } else {
      button.classList.remove(activeButton);
    }

    prevButtonElement.setAttribute(inactiveButton, currentSlide === 0);
    nextButtonElement.setAttribute(inactiveButton, currentSlide === slideCount - 1);
  });
};

controlButtonElements.forEach((button, index) => {
  button.addEventListener('click', () => {
    if (index < slideCount) {
      currentSlide = index;
      updateSlider();
    }
  });
});

prevButtonElement.addEventListener('click', () => {
  if (currentSlide > 0) {
    currentSlide--;
    updateSlider();
  }
});

nextButtonElement.addEventListener('click', () => {
  if (currentSlide < slideCount - 1) {
    currentSlide++;
    updateSlider();
  }
});

updateSlider();
