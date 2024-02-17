  /* eslint-disable no-unused-expressions */
// NavBar Scolling
const header = document.querySelector('.header');

let preScrollPos = window.scrollX;

window.onscroll = () => {
  const currentScrollPos = window.scrollY;

  preScrollPos > currentScrollPos ? header.classList.remove('scroll') : header.classList.add('scroll');

  preScrollPos = currentScrollPos;
};

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
    title: 'Url-shortening-api-Landing-Page',
    description: 'Shorten any valid URL, See a list of their shortened links, even after refreshing the browser, Copy the shortened link to their clipboard in a single click, Receive an error message when the form is submitted if - The input field is empty, The input URL is not valid',
    popupDescription: 'The user should be able to - View the optimal layout for the site depending on their device\'s screen size Shorten any valid URL, See a list of their shortened links, even after refreshing the browser, Copy the shortened link to their clipboard in a single click, Receive an error message when the form is submitted if: The input field is empty.',
    featuredImage: './desktop-images/desktop-wider.jpg',
    popupImg: './desktop-images/desktop-wider.jpg',
    technologies: ['Javascript', 'APIs', 'Flexbox', 'Html', 'Css'],
    liveLink: 'https://url-shortening-api-landing-page-delta.vercel.app/',
    sourceLink: 'https://github.com/Have-Samuel/url-shortening-api-landing-Page',
  },
  {
    title: 'Loopstudios Landing Page',
    description: 'Users should be able to view the optimal layout for the site depending on their device\'s screen size, See hover states for all interactive elements on the page.',
    popupDescription: 'Users should be able to view the optimal layout for the site depending on their device\'s screen size, See hover states for all interactive elements on the page.',
    featuredImage: './desktop-images/desktOp-preview.jpg',
    popupImg: './desktop-images/desktOp-preview.jpg',
    technologies: ['html-css', 'Javascript', 'Best Practices', 'Gitflow'],
    liveLink: 'https://have-samuel.github.io/loopstudio-landing-page/',
    sourceLink: 'https://github.com/Have-Samuel/time-tracking-dashboard',
  },
  {
    title: 'Age Calculator',
    description: 'Users should be able to View the optimal layout for the app depending on their device\'s screen size, See hover states for all interactive elements on the page, Calculate the age of a person in years, months, and days by selecting their date of birth from a date picker, Receive an error message if no date of birth is selected, After submitting the form, see a card with the date of birth details.',
    popupDescription: 'Users should be able to View the layout for the app depending on their device\'s screen size, See hover states for all interactive elements on the page, Calculate the age of a person in years, months, and days by selecting their date of birth from a date picker, Receive an error message if no date of birth is selected, After submitting the form, see a card with the date of birth details.',
    featuredImage: './desktop-images/desktop-previeW.jpg',
    popupImg: './desktop-images/desktop-DesIgn.jpg',
    technologies: ['Javascript', 'HTML', 'CSS', 'Gitflow'],
    liveLink: 'https://have-samuel.github.io/age-Calculator-App/',
    sourceLink: 'https://github.com/Have-Samuel/age-Calculator-App',
  },
  {
    title: 'Section with Dropdown Menu',
    description: 'Users should be able to view the relevant dropdown menus on desktop and mobile when interacting with the navigation links, view the optimal layout for the content depending on their device\'s screen size, and see hover states for all interactive elements on the page.',
    popupDescription: 'Users should be able to see all dropdown menus on desktop and mobile when interacting with the navigation links, see the optimal layout for the content depending on their device\'s screen size, and see hover states for all interactive elements on the page.',
    featuredImage: './desktop-images/desktop-Preview.jpg',
    popupImg: './desktop-images/desktop-Design.jpg',
    technologies: ['Javascript', 'HTML', 'CSS', 'Gitflow'],
    liveLink: 'https://subtle-dd.netlify.app/',
    sourceLink: 'https://github.com/Have-Samuel/section-with-dropdown',
  },
  {
    title: 'Advice Generator',
    description: 'Users should be able to View the optimal layout for the app depending on their device\'s screen size (Responsive), See hover states for all interactive elements on the page, Generate a new piece of advice at random ID by clicking the dice icon.',
    popupDescription: 'View the optimal layout for the app depending on their device\'s screen size See hover states for all interactive elements on the page Generate a new piece of advice by clicking the dice icon. Use the Axios Library to request data from the Advice Slip JSON API. Use async/await to handle the Promise returned by the Axios Library. Display the returned advice slip in the app. Display a loading state when waiting for a response from the API.',
    featuredImage: './desktop-images/desktop-previewAd.jpg',
    popupImg: './desktop-images/desktop-Av-design.jpg',
    technologies: ['API', 'Javascript', 'HTML', 'CSS', 'Gitflow'],
    liveLink: 'https://chipper-advicer.netlify.app/',
    sourceLink: 'https://github.com/Have-Samuel/advice-generator-app',
  },
  {
    title: 'Interactive Credit Card',
    description: 'Simple Credit Card built with jQuery and Javascript, the User fills the form and see the details update on the Card, If there is any errors, they get notices, and the card is Responsive to different screen sizes..',
    popupDescription: 'Users should be able to Fill in the form and see the card details update in real time, Receive error messages when the form is submitted: if Any input field is empty, The card number, expiry date, or CVC fields are in the wrong format, View the optimal layout depending on their device\'s screen sizeSee hover, active, and focus states for interactive elements on the page.',
    featuredImage: './desktop-images/desktop-preview.jpg',
    popupImg: './desktop-images/desktop-design-1.jpg',
    technologies: ['jQuery', 'Flexbox', 'Javascript', 'Positioning'],
    liveLink: 'https://cc-kashata-d11e95.netlify.app/',
    sourceLink: 'https://github.com/Have-Samuel/interactive-Card-Details',
  },
];

// Technology list for the page
function techs(tech) {
  return `
  <ul class="tech-list">
    ${tech.map((tech) => `<li class="tech-item">${tech}</li>`).slice(0, 5).join('')}
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

const form = document.querySelector('#js-form');
const fullName = document.querySelector('#name-input');
const email = document.querySelector('#email-input');
const message = document.querySelector('#message-input');

function errorText(ele, message) {
  const formControl = ele.parentElement;
  const small = formControl.querySelector('small');
  small.innerText = message;

  formControl.classList.add('error');
}

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

function removeError() {
  const formError = document.querySelectorAll('.error');

  formError.forEach((error) => {
    error.classList.remove('error');
  });
}

function resetInput() {
  form.reset();
}

form.addEventListener('submit', (e) => {
  e.preventDefault();
  removeError();
  validate();
  resetInput();
});
