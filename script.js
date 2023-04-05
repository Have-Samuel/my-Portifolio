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
    name: 'Printing Data One',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required. Has been the industry\'s standard.',
    technologies: ['Javascript', 'React', 'Ruby', 'Rails'],
    liveLink: 'https://have-samuel.github.io/portfolio1/',
    sourceLink: 'https://github.com/Have-Samuel/portfolio1',
    button: 'See Project',
  },
];

const arrClassName = ['project1', 'project2', 'project3', 'project4', 'project5', 'project6'];

// Creating a card
function createProjects(project, name) {
  const projectItem = `
  <div class='${name}'>
  <section class='section3 card section-cards'>
  <div class='img-div'>
 
  </div>
  <div class='section-paragraph'>
  <h4 class='card-header'>${project.name}</h4>
  <p class='card-paragraph'>${project.description}</p>
  <ul class='card-technologies'>${project.technologies.map((tech) => `<li class='card-tech-item'>${tech}</li>`).join('')}
  </ul>
  <a href='${project.liveLink}' class="card-Btn1">${project.button}</a>
  </div>
  </section>
  </div>
  `;
  return projectItem;
}

for (let i = 0; i < 6; i += 1) {
  allProjects.innerHTML += createProjects(projects[0], arrClassName[i]);
}

const createProjectsCard = () => {
  const projectImgContainer = document.createElement('div');
  // projectImgContainer.classList.add('card');

  // image
  const projectImage = document.createElement('img');
  // // projectImage.classList.add('card-img');
  // projectImage.src = project.featuredImage;

  // project Header
  const header = document.createElement('h4');

  // project paragraph
  const paragraph = document.createElement('p');

  // project technologies
  const technologies = document.createElement('ul');

  // project button
  const btn = document.createElement('a');

  projectImgContainer.append(projectImage, header, paragraph, technologies, btn);
};

createProjectsCard();
