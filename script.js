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

// PROJECTS
const projects = [
  {
    title: 'Printing Data One',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required. Has been the industry\'s standard.',
    popupDescription: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
    featuredImage: './desktop-images/imagecard2.png',
    popupImg: './images/popup.png',
    technologies: ['Javascript', 'React', 'Ruby', 'Rails'],
    liveLink: 'https://have-samuel.github.io/portfolio1/',
    sourceLink: 'https://github.com/Have-Samuel/portfolio1',
  },
  {
    title: 'Printing Data One',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required. Has been the industry\'s standard.',
    popupDescription: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
    featuredImage: './desktop-images/imagecard3.png',
    popupImg: './images/popup.png',
    technologies: ['Javascript', 'React', 'Ruby', 'Rails'],
    liveLink: 'https://have-samuel.github.io/portfolio1/',
    sourceLink: 'https://github.com/Have-Samuel/portfolio1',
  },
  {
    title: 'Printing Data One',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required. Has been the industry\'s standard.',
    popupDescription: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
    featuredImage: './desktop-images/imagecard4.png',
    popupImg: './images/popup.png',
    technologies: ['Javascript', 'React', 'Ruby', 'Rails'],
    liveLink: 'https://have-samuel.github.io/portfolio1/',
    sourceLink: 'https://github.com/Have-Samuel/portfolio1',
  },
  {
    title: 'Printing Data One',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required. Has been the industry\'s standard.',
    popupDescription: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
    featuredImage: './desktop-images/imagecard5.png',
    popupImg: './images/popup.png',
    technologies: ['Javascript', 'React', 'Ruby', 'Rails'],
    liveLink: 'https://have-samuel.github.io/portfolio1/',
    sourceLink: 'https://github.com/Have-Samuel/portfolio1',
  },
  {
    title: 'Printing Data One',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required. Has been the industry\'s standard.',
    popupDescription: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
    featuredImage: './desktop-images/imagecard6.png',
    popupImg: './images/popup.png',
    technologies: ['Javascript', 'React', 'Ruby', 'Rails'],
    liveLink: 'https://have-samuel.github.io/portfolio1/',
    sourceLink: 'https://github.com/Have-Samuel/portfolio1',
  },
  {
    title: 'Printing Data One',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required. Has been the industry\'s standard.',
    popupDescription: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
    featuredImage: './desktop-images/imagecard2.png',
    popupImg: './images/popup.png',
    technologies: ['Javascript', 'React', 'Ruby', 'Rails'],
    liveLink: 'https://have-samuel.github.io/portfolio1/',
    sourceLink: 'https://github.com/Have-Samuel/portfolio1',
  },
];

// Technology list for the page
function techs(tech) {
  return `
  <ul class="tech-list">
    ${tech.map((tech) => `<li class="tech-item">${tech}</li>`).slice(0, 4).join('')}
  </ul>
  `;
}

// Technology list for the popup
const popupTechs = (tech) => `
  <ul class="tech-list">
    ${tech.map((tech) => `<li class="tech-item">${tech}</li>`).join('')}
  </ul>
  `;

// Dynamically render the projects
function projectCard(work) {
  return `
  <article class="card">
  <img class="card-img" src="${work.featuredImage}" alt="project image" aria-hidden="true">
  <div class="card-description">
    <h2 class="title color-caption">${work.title}</h2>
    <p class="details">${work.description}</p>
    ${techs(work.technologies)}
    <button class="btn" type="button">See Project</button>
  </div>
</article>
  `;
}

const allProjects = document.querySelector('#section-cards');
allProjects.innerHTML = `
  ${projects.map(projectCard).join('')}
`;
// Popup
const projectBtn = document.querySelectorAll('.btn');
const main = document.querySelector('main');

let modal;
let modalContent;

function closeModal() {
  if (modal) {
    modal.remove();
  }
  if (modalContent) {
    modalContent.remove();
  }
}

const arrClassName = [];

// Loop through the projects array
for (let i = 0; i < projects.length; i += 1) {
  modal = document.createElement('div');
  arrClassName.push(`
    <article class="popup">
      <div class="popup-header">
        <h2 class="title color-caption">${projects[i].title}</h2>
        <img class="close-icon" src="./images/Vector.png" alt="close icon">
        <i class="fa-solid fa-x"></i>
      </div>
      ${popupTechs(projects[i].technologies)}
      <div class="popup-details">
        <img class="popup-img" src="${projects[i].popupImg}" alt="popup image">
        <p class="popup-description">${projects[i].popupDescription}</p>
      </div>
      <div class="popup-footer">
        <a class="popup-btn" href="${projects[i].liveLink}" target="_blank" rel="noopener noreferrer">See Live<span><img src="./images/Icon.png" alt=""></span></a>
        <a class="popup-btn" href="${projects[i].sourceLink}" target="_blank" rel="noopener noreferrer">See Source<span><img src="./images/Github1.png" alt=""></span></a>
      </div>
    </article>
  `);
}

// project button event listener and x button event listener
projectBtn.forEach((btn, index) => {
  btn.addEventListener('click', (click) => {
    if (click.target.id === btn.id) {
      modal.innerHTML = arrClassName[index];
      modalContent = document.createElement('div');
      modalContent.classList.add('popup-content');
      modalContent.addEventListener('click', closeModal);
      main.appendChild(modalContent);
      modalContent.appendChild(modal);
    }
  });
});
