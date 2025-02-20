const navMainElement = document.querySelector('.main-nav');
const navToggleElement = document.querySelector('.main-nav__toggle');

const toggleMenu = (button) => {
  button.classList.toggle('main-nav--is-closed');
  button.classList.toggle('main-nav--is-open');
};

navToggleElement.addEventListener('click', () => {
  toggleMenu(navMainElement);
});
