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
    projectId: 'projectOne',
    featuredImage: './images/Background.png',
    idx: 'Printing Data One',
    description: 'A daily selection of privately personalized reads; no accounts or ',
    technologies: ['Javascript', 'React', 'Ruby', 'Rails'],
    button: 'See Project',
    liveLink: 'https://have-samuel.github.io/portfolio1/',
    sourceLink: 'https://github.com/Have-Samuel/portfolio1',
  },
];

const arrClassName = ['project1', 'project2', 'project3', 'project4', 'project5', 'project6'];

// Creating a card
function createProjects(project, idx) {
  const projectItem = `
  <div class='${idx}'>
  <section class='section-cards'>
  <div class='card-img'>
  <img src='${project.featuredImage}' alt='Project'>
  </div>
  <div class='section-paragraph'>
  <h4 class='card-header'>${project.idx}</h4>
  <p class='card-paragraph'>${project.description}</p>
  <ul class='card-technologies'>${project.technologies.map((tech) => `<li class='card-tech-item'>${tech}</li>`).join('')}
  <ul>
  <a href='${project.liveLink}' class="card-Btn">${project.button}</a>
  </div>
  </section>
  </div>
  `;
  return projectItem;
}

for (let i = 0; i < 1; i += 1) {
  allProjects.innerHTML += createProjects(projects[0], arrClassName[i]);
}

const createProjectsCard = (project) => {
  const projectImgContainer = document.createElement('div');
  // projectImgContainer.classList.add('card');

  // project Header
  const header = document.createElement('h4');
  // header.classList.add('card-header');
  header.textContent = project.name;

  // project paragraph
  const paragraph = document.createElement('p');
  // paragraph.classList.add('card-paragraph');
  paragraph.textContent = project.description;

  // project technologies
  const technologies = document.createElement('ul');
  // technologies.classList.add('card-technologies');

  // project technologies list
  for (let i = 0; i < project.technologies.length; i += 1) {
    const techItem = document.createElement('li');
    // techItem.classList.add('card-tech-item');
    techItem.textContent = project.technologies[i];
    technologies.appendChild(techItem);
  }

  // project button
  const btn = document.createElement('a');
  btn.classList.add('card-btn');
  btn.textContent = project.button;

  projectImgContainer.append(header, paragraph, technologies, btn);
};

// loop through the array of objects
const updataProjects = (projectSection) => {
  for (let i = 0; i < projects.length; i += 1) {
    projectSection.append(createProjectsCard(projects[i]));
  }
};

updataProjects(projects);
