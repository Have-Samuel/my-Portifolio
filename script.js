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
    featuredImage: './desktop-images/imagecard2.png',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required. Has been the industry\'s standard.',
    technologies: ['Javascript', 'React', 'Ruby', 'Rails'],
    liveLink: 'https://have-samuel.github.io/portfolio1/',
    sourceLink: 'https://github.com/Have-Samuel/portfolio1',
    button: 'See Project',
  },
  {
    projectId: 'projecttwo',
    name: 'Printing Data One',
    featuredImage: './desktop-images/imagecard3.png',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required. Has been the industry\'s standard.',
    technologies: ['Javascript', 'React', 'Ruby', 'Rails'],
    liveLink: 'https://have-samuel.github.io/portfolio1/',
    sourceLink: 'https://github.com/Have-Samuel/portfolio1',
    button: 'See Project',
  },
  {
    projectId: 'projectThree',
    name: 'Printing Data One',
    featuredImage: './desktop-images/imagecard4.png',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required. Has been the industry\'s standard.',
    technologies: ['Javascript', 'React', 'Ruby', 'Rails'],
    liveLink: 'https://have-samuel.github.io/portfolio1/',
    sourceLink: 'https://github.com/Have-Samuel/portfolio1',
    button: 'See Project',
  },
  {
    projectId: 'projectFour',
    name: 'Printing Data One',
    featuredImage: './desktop-images/imagecard5.png',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required. Has been the industry\'s standard.',
    technologies: ['Javascript', 'React', 'Ruby', 'Rails'],
    liveLink: 'https://have-samuel.github.io/portfolio1/',
    sourceLink: 'https://github.com/Have-Samuel/portfolio1',
    button: 'See Project',
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

// const arrClassName = ['project1', 'project2', 'project3', 'project4', 'project5', 'project6'];

// Looping through the cards
for (let i = 0; i < projects.length; i += 1) {
  const project = projects[i];
  const projectCard = document.createElement('div');
  projectCard.classList.add('card');

  // image
  const image = document.createElement('img');
  image.classList.add('image');
  image.src = project.featuredImage;
  image.alt = 'project image';
  projectCard.appendChild(image);

  // card content
  const cardContent = document.createElement('div');
  cardContent.classList.add('card-content');
  projectCard.appendChild(cardContent);

  // card header
  const cardHeader = document.createElement('h2');
  cardHeader.classList.add('card-header');
  cardHeader.textContent = project.name;
  
  // projectCard.className = `card, ${arrClassName[i]}`;
  // projectCard.id = project.projectId;
  projectCard.innerHTML = `
    <div class="card-img">
      <img class='image' src="${project.featuredImage}" alt="project image">
    <div class="card-content">
      <h2 class="card-header">${project.name}</h2>
      <p class="card-paragraph">${project.description}</p>
      <ul class="card-technologies">
        <li class="card-tech_item">${project.technologies[0]}</li>
        <li class="card-tech_item">${project.technologies[1]}</li>
        <li class="card-tech_item">${project.technologies[2]}</li>
        <li class="card-tech_item">${project.technologies[3]}</li>
      </ul>
      <div class="card-btn">
        <a href="${project.button}" class="card-Btn1" target="_blank">${project.button}</a>
      </div>
      </div>
    </div>
  `;

  allProjects.appendChild(projectCard);
}