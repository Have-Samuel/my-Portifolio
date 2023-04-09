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
// const $form = document.querySelector('.js-form');
// const $nameInput = document.querySelector('.js-name-input');
// const $emailInput = document.querySelector('.js-email-input');
// const $comsInput = document.querySelector('.js-textarea');

// const validate = () => {
//   const nameValue = $nameInput.value.trim();
//   const emailValue = $emailInput.value.trim();
//   const comsValue = $comsInput.value.trim();

//   console.log('validate', nameValue, emailValue, comsValue);
// };

// $form.addEventListener('submit', (e) => {
//   e.preventDefault();

//   validate();
// });

// PROJECTS
const allProjects = document.querySelector('#section-cards');

const projects = [
  {
    title: 'Printing Data One',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required. Has been the industry\'s standard.',
    popupDescription: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
    featuredImage: './desktop-images/imagecard2.png',
    popupImg: '.images',
    technologies: ['Javascript', 'React', 'Ruby', 'Rails'],
    liveLink: 'https://have-samuel.github.io/portfolio1/',
    sourceLink: 'https://github.com/Have-Samuel/portfolio1',
  },
  {
    title: 'Printing Data One',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required. Has been the industry\'s standard.',
    popupDescription: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
    featuredImage: './desktop-images/imagecard3.png',
    popupImg: '.images',
    technologies: ['Javascript', 'React', 'Ruby', 'Rails'],
    liveLink: 'https://have-samuel.github.io/portfolio1/',
    sourceLink: 'https://github.com/Have-Samuel/portfolio1',
  },
  {
    title: 'Printing Data One',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required. Has been the industry\'s standard.',
    popupDescription: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
    featuredImage: './desktop-images/imagecard4.png',
    popupImg: '.images',
    technologies: ['Javascript', 'React', 'Ruby', 'Rails'],
    liveLink: 'https://have-samuel.github.io/portfolio1/',
    sourceLink: 'https://github.com/Have-Samuel/portfolio1',
  },
  {
    title: 'Printing Data One',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required. Has been the industry\'s standard.',
    popupDescription: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
    featuredImage: './desktop-images/imagecard5.png',
    popupImg: '.images',
    technologies: ['Javascript', 'React', 'Ruby', 'Rails'],
    liveLink: 'https://have-samuel.github.io/portfolio1/',
    sourceLink: 'https://github.com/Have-Samuel/portfolio1',
  },
  {
    projectId: 'projectFive',
    name: 'Printing Data One',
    featuredImage: './desktop-images/imagecard6.png',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required. Has been the industry\'s standard.',
    technologies: ['Javascript', 'React', 'Ruby', 'Rails'],
    liveLink: 'https://have-samuel.github.io/portfolio1/',
    sourceLink: 'https://github.com/Have-Samuel/portfolio1',
    button: 'See Project',
  },
  {
    projectId: 'projectSix',
    name: 'Printing Data One',
    featuredImage: './desktop-images/imagecard2.png',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required. Has been the industry\'s standard.',
    technologies: ['Javascript', 'React', 'Ruby', 'Rails'],
    liveLink: 'https://have-samuel.github.io/portfolio1/',
    sourceLink: 'https://github.com/Have-Samuel/portfolio1',
    button: 'See Project',
  },
];

const arrClassName = ['project1', 'project2', 'project3', 'project4', 'project5', 'project6'];

// Loop through the projects array
for (let i = 0; i < projects.length; i += 1) {
  const project = projects[i];
  const projectCard = document.createElement('div');
  projectCard.className = `section3 ${arrClassName[i]}`;
  projectCard.innerHTML = `
    <section class="card">
      <img class='image' src="${project.featuredImage}" alt="project image">
      <h2 class="card-header">${project.name}</h2>
      <p class="card-paragraph">${project.description}</p>
      <ul class="card-technologies">${project.technologies.map((tech) => `<li class='card-tech_item'>${tech}</li>`).join('')}</ul>
      <div class="card-btn">
        <a href="${project.button}" class="card-Btn1" target="_blank">${project.button}</a>
      </div>
  </section>
  `;

  allProjects.appendChild(projectCard);
}
