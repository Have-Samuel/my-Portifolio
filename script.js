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
    title: 'Printing One Data',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required. Has been the industry\'s standard.',
    popupDescription: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry.',
    featuredImage: './desktop-images/imagecard4.png',
    popupImg: './images/popup.png',
    technologies: ['Javascript', 'React', 'Ruby', 'Rails'],
    liveLink: 'https://have-samuel.github.io/portfolio1/',
    sourceLink: 'https://github.com/Have-Samuel/portfolio1',
  },
  {
    title: 'Printing Data',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required. Has been the industry\'s standard.',
    popupDescription: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. ',
    featuredImage: './desktop-images/imagecard3.png',
    popupImg: './images/popup.png',
    technologies: ['Javascript', 'React', 'Ruby', 'Rails'],
    liveLink: 'https://have-samuel.github.io/portfolio1/',
    sourceLink: 'https://github.com/Have-Samuel/portfolio1',
  },
  {
    title: 'Printing Data',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required. Has been the industry\'s standard.',
    popupDescription: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. ',
    featuredImage: './desktop-images/imagecard4.png',
    popupImg: './images/popup.png',
    technologies: ['Javascript', 'React', 'Ruby', 'Rails'],
    liveLink: 'https://have-samuel.github.io/portfolio1/',
    sourceLink: 'https://github.com/Have-Samuel/portfolio1',
  },
  {
    title: 'Printing Data',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required. Has been the industry\'s standard.',
    popupDescription: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry.',
    featuredImage: './desktop-images/imagecard5.png',
    popupImg: './images/popup.png',
    technologies: ['Javascript', 'React', 'Ruby', 'Rails'],
    liveLink: 'https://have-samuel.github.io/portfolio1/',
    sourceLink: 'https://github.com/Have-Samuel/portfolio1',
  },
  {
    title: 'Printing Data',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required. Has been the industry\'s standard.',
    popupDescription: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry.',
    featuredImage: './desktop-images/imagecard6.png',
    popupImg: './images/popup.png',
    technologies: ['Javascript', 'React', 'Ruby', 'Rails'],
    liveLink: 'https://have-samuel.github.io/portfolio1/',
    sourceLink: 'https://github.com/Have-Samuel/portfolio1',
  },
  {
    title: 'Printing Data',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required. Has been the industry\'s standard.',
    popupDescription: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry.',
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
        <h2 class="title color-caption large-size">${projects[i].title}</h2>
        <img class="close-icon" src="./images/cancel-black.png" alt="close icon">
      </div>
      ${popupTechs(projects[i].technologies)}
      <div class="popup-details">
        <img class="popup-img" src="${projects[i].popupImg}" alt="popup image">
        <p class="popup-description desc-large">${projects[i].popupDescription}</p>
      </div>
      <div class="popup-footer">
        <a class="popup-btn" href="${projects[i].liveLink}" target="_blank" rel="noopener noreferrer">See Live<span><img class="innerImg" src="./images/Icon.png" alt=""></span></a>
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

// Form Validation
const form = document.querySelector('.js-form');
const fullName = document.querySelector('.name-input');
const email = document.querySelector('.email-input');
const message = document.querySelector('.textarea');

// Adding an Error message
function errorText(ele, message) {
  const formControl = ele.parentElement;

  const small = formControl.querySelector('small');
  formControl.className = 'form__field error';

  small.innerText = message;
}

// Validating the form
function validate() {
  const fullNameValue = fullName.value.trim();
  const emailValue = email.value.trim();
  const messageValue = message.value.trim();

  function isEmail(email) {
    return /^([a-zA-Z0-9_\-\\.]+)@([a-zA-Z0-9_\-\\.]+)\.([a-zA-Z]{2,5})$/.test(email);
  }

  if (!fullNameValue) {
    errorText(fullName, 'Full name cannot be empty');
  }

  if (!emailValue) {
    errorText(email, 'Email cannot be empty');
  } else if (!isEmail(emailValue)) {
    errorText(email, 'Email is not valid');
  }

  if (!messageValue) {
    errorText(message, 'Message cannot be empty');
  }
}

// Remove Error message
function removeError() {
  const formError = document.querySelectorAll('.error');

  formError.forEach((error) => {
    error.classList.remove('error');
  });
}

function resetInput() {
  form.reset();
}

// submitBtn.addEventListener('click', validate);

form.addEventListener('submit', (e) => {
  e.preventDefault();
  validate();
  removeError();
  resetInput();
});

// // Local Storage
// const inputs = document.querySelectorAll('.name-input, .email-input, .textarea');

// const saveData = () => {
//   if (localStorage.getItem('formDetails')) {
//     const data = JSON.parse(localStorage.getItem('formDetails'));
//     fullName.value = data.fullName;
//     email.value = data.email;
//     message.value = data.message;
//   }
// };

// saveData();

// inputs.forEach((input) => {
//   input.addEventListener('input', () => {
//     const data = {
//       fullName: fullName.value,
//       email: email.value,
//       message: message.value,
//     };
//     localStorage.setItem('formDetails', JSON.stringify(data));
//   });
// });
