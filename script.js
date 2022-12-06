const bar = document.querySelector('.bar');
const menuIcon = document.querySelector('.hamburger-menu');

const list = document.querySelectorAll('.nav-item');
list.forEach((element) => {
  element.addEventListener('click', () => {
    bar.classList.toggle('change');
  });
});

menuIcon.addEventListener('click', () => {
  bar.classList.toggle('change');
});