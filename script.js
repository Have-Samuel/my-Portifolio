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
// const allProjects = document.querySelector('#projects');
// const popup = document.querySelector('.popup-project');

const Project = [
  {
    projectId: 'projectOne',
    featuredImage: './images/Background.png',
    name: 'Printing Data One',
    description: 'A daily selection of privately personalized reads; no accounts or ',
    technologies: ['html', 'Bootstrap', 'Ruby'],
    button: 'See Project',
  },
];

// const arrClassName = ['project1', 'project2', 'project3', 'project4', 'project5', 'project6'];

const projects = document.querySelector('#section-cards');
const createProjectsCard = (project) => {
  const projectImgContainer = document.createElement('div');
  projectImgContainer.classList.add('card');

  // project Header
  const header = document.createElement('h4');
  header.classList.add('card-header');
  header.textContent = project.name;

  // project paragraph
  const paragraph = document.createElement('p');
  paragraph.classList.add('card-paragraph');
  paragraph.textContent = project.description;

  // project technologies
  const technologies = document.createElement('ul');
  technologies.classList.add('card-technologies');

  // project technologies list
  for (let i = 0; i < project.technologies.length; i += 1) {
    const techItem = document.createElement('li');
    techItem.classList.add('card-tech-item');
    techItem.textContent = project.technologies[i];
    technologies.appendChild(techItem);
  }

  const techItem = document.createElement('li');
  techItem.classList.add('card-tech-item');
  techItem.textContent = project.technologies;

  technologies.appendChild(techItem);

  // project href
  const btn = document.createElement('a');
  btn.classList.add('card-btn');
  btn.textContent = project.button;

  projectImgContainer.append(header, paragraph, technologies, btn);
};

// loop through the array of objects



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