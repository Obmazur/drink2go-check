const navMainElement = document.querySelector('.main-nav');
const navToggleElement = document.querySelector('.js-toggle-button');

const toggleMenu = (button) => {
  button.classList.toggle('main-nav--is-closed');
  button.classList.toggle('main-nav--is-open');
};

navToggleElement.addEventListener('click', () => {
  toggleMenu(navMainElement);
});
