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
const form = document.querySelector('form');
const nameInput = document.querySelector('name["name-input"]');
const emailInput = document.querySelector('name["email-input"]');
const commentsInput = document.querySelector('name["comments-input"]');

const validate() = () => {
  
}

form.addEventListener('submit', (e) => {
  e.preventDefault();

  validate();
});