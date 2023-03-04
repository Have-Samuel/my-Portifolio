// Mobile MenuPop
const menuIcon = document.querySelector('.hamburger-menu');
const navbar = document.querySelector('.navbar');

const list = document.querySelectorAll('.nav-list > li');
list.forEach((element) => {
  element.addEventListener('click', () => {
    navbar.classList.toggle('change');
  });
});

menuIcon.addEventListener('click', () => {
  navbar.classList.toggle('change');
});

// Form validation
const $form = document.querySelector('.js-form');
const $nameInput = document.querySelector('.js-name-input');
const $emailInput = document.querySelector('.js-email-input');
const $comsInput = document.querySelector('.js-textarea');

const validate = () => {
  const nameValue = $nameInput.value.trim();
  const emailValue = $emailInput.value.trim();
  const comsValue = $comsInput.value.trim();

  console.log('validate', nameValue, emailValue, comsValue);
};

$form.addEventListener('submit', (e) => {
  e.preventDefault();

  validate();
});