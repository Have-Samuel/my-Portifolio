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
// const $nameInput = document.querySelector('.js-name-input');
// const $emailInput = document.querySelector('.js-email-input');
// const $comsInput = document.querySelector('.js-textarea');

const validate = () => {
  // const nameValue = $nameInput.value.trim();
  // const emailValue = $emailInput.value.trim();
  // const comsValue = $comsInput.value.trim();

  // console.log('validate', nameValue, emailValue, comsValue);
};

$form.addEventListener('submit', (e) => {
  e.preventDefault();

  validate();
});

// PROJECTS
const allProjects = document.querySelector('#projects');
// const popup = document.querySelector('.popup-project');

const Project = [
  {
    projectId: 'projectOne',
    featuredImage: './images/Background.png',
    name: 'Printing Data One',
    description: 'A daily selection of privately personalized reads; no accounts or ',
    technologies: ['html', 'Bootstrap', 'Ruby'],
  },
];

// const arrClassName = ['project1', 'project2', 'project3', 'project4', 'project5', 'project6'];

const projects = document.querySelector('#section-cards');
const createProjectsCard = (project) => {
  const data = document.createElement('div');
  data.classList.add('card');
}







// function createProject(project, name) {
//   const techItem = `
// <div class="section-cards">
//     <section class='card'>
//     <div id='post-container'>
//     <img class='image' src='${project.featuredImage}' >
//     </div>
//   <div class='section-paragraph'>
//     <h4 class=''>${project.name}</h4>
//     <p class=''>
//     ${project.description}
//   </p>
//   <ul class='section3-items'>
// ${project.technologies
//     .map(
//       (tech) => `<li class='section3-item1 section3-item2 section3-item3'>${tech}</li>`,
//     )
//     .join('')}
// </ul>
// <button class=section3__project1' onclick='model('.${name}')' id='${
//   project.projectId
// }'>See Project</button>
// </div>
// </section>
// </div>
// `;
//   return techItem;
// }

// for (let i = 0; i < 2; i += 1) {
//   allProjects.innerHTML += createProject(projects[0], arrClassName[i]);
// }

function model(name) {
  const languages = ['html', 'Bootstrap', 'Ruby on Rails'];
  const parentDiv = document.createElement('div');
  parentDiv.className = 'parent-div';
  const section = document.createElement('section');
  section.className = 'popup-section';
  const modalDiv = document.createElement('div');
  modalDiv.className = 'popup-modal';
  const multiStories = document.createElement('div');
  multiStories.className = 'multi-stories';
  const icon = document.createElement('i');
  icon.className = 'fa fa-times times';
  const title = document.createElement('h2');
  title.innerHTML = 'Multi Post Stories';
  multiStories.append(title, icon);

  const technologies = document.createElement('div');
  technologies.className = 'popup-lanuguages';
  const ul = document.createElement('ul');
  ul.className = 'popup-items';
  technologies.appendChild(ul);

  for (let i = 0; i < languages.length; i += 1) {
    const li = document.createElement('li');
    li.clasName = 'popup-item';
    li.innerHTML = languages[i];
    ul.appendChild(li);
  }

  const popupImageContainer = document.createElement('div');
  const projectImage = document.createElement('img');
  popupImageContainer.className = 'popup-paraimg';
  projectImage.className = 'popup-image';
  const description = document.createElement('p');

  projectImage.src = 'popup-images/Snapshoot Portfolio.png';
  description.innerHTML = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos maiores quo libero perferendis delectus dolore quisquam alias a sit accusantium dignissimos dolorem';
  popupImageContainer.append(projectImage, description);
  const buttonList = document.createElement('ul');
  buttonList.className = 'modal-btn';
  const buttonName = ['See live', 'See source'];
  const imageSource = ['fas fa-external-link-alt', 'fab fa-github'];

  for (let i = 0; i < buttonName.length; i += 1) {
    const li = document.createElement('li');
    const image = document.createElement('span');
    const button = document.createElement('button');
    const icon1 = document.createElement('i');
    icon1.className = imageSource[i];
    button.className = 'project-button';
    image.className = 'modal-icon';
    image.appendChild(icon1);

    button.append(buttonName[i], image);
    li.appendChild(button);
    buttonList.appendChild(li);
  }

  icon.addEventListener('click', () => {
    parentDiv.classList.toggle('togglePopup');
  });

  modalDiv.append(multiStories, technologies, popupImageContainer, buttonList);
  section.appendChild(modalDiv);
  parentDiv.appendChild(section);
  const popupContainer = document.querySelector(name);
  popupContainer.appendChild(parentDiv);
}

model();