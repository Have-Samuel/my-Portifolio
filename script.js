const menuIcon = document.querySelector('.hamburger-menu');
const bar = document.querySelector('.bar .navbar');

const list = document.querySelectorAll('.nav-list');
list.forEach((element) => {
  element.addEventListener('click', () => {
    bar.classList.toggle('change');
  });
});

menuIcon.addEventListener('click', () => {
  bar.classList.toggle('change');
});