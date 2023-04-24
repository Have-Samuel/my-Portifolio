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
    title: 'Portfolio Website',
    description: 'Basic Portfolio Website that built with HTML, CSS and JavaScript, and shows two pages as a sample if more needed.',
    popupDescription: 'This a basic Portfolio Website that built with HTML, CSS and JavaScript, and shows two pages as a sample for the whole website to become functional.',
    featuredImage: './desktop-images/slider-1.png',
    popupImg: './desktop-images/slider-1.png',
    technologies: ['Javascript', 'Flexbox', 'Html', 'Css'],
    liveLink: 'https://have-samuel.github.io/PortfolioCsT1/',
    sourceLink: 'https://github.com/Have-Samuel/PortfolioCsT1',
  },
  {
    title: 'Meme Generator',
    description: 'Your generator should consist of a form that accepts a link to an image, text for the top of the meme, and text for the bottom of the meme. When the user submits the form, use JavaScript to append to the DOM a div which contains the meme, including the image and its text.',
    popupDescription: 'Your generator should consist of a form that accepts a link to an image, text for the top of the meme, and text for the bottom of the meme. When the user submits the form, use JavaScript to append to the DOM a div which contains the meme, including the image and its text. ',
    featuredImage: './desktop-images/slider2-2.png',
    popupImg: './desktop-images/slider-2.png',
    technologies: ['Javascript', 'Html', 'Css'],
    liveLink: 'https://mem-gen.netlify.app/',
    sourceLink: 'https://github.com/Have-Samuel/memeGenerator',
  },
  {
    title: 'Book Store',
    description: 'The Bookstore is a website similar to the "Awesome Books" website. Here we will create an MVP version of it that: Display a list of books, Add a book and Remove a selected book.',
    popupDescription: 'The Bookstore is a website similar to the "Awesome Books" website. Here we will create an MVP version of it that: Display a list of books, Add a book and Remove a selected book.',
    featuredImage: './desktop-images/slider-3.png',
    popupImg: './desktop-images/slider-3.png',
    technologies: ['Javascript', 'React', 'Html', 'Css'],
    liveLink: 'https://bookstore256.netlify.app/',
    sourceLink: 'https://github.com/Have-Samuel/portfolio1',
  },
  {
    title: 'Connect Four',
    description: 'Connect Four is played on a grid, with two players, 1 (red) and 2 (blue). The players alternate turns, dropping a piece of their color in the top of a column. The piece will fall down to the further-down unoccupied slot. The game is won when a player makes four in a row (horizontally, vertically, or diagonally and anti-diagonally)',
    popupDescription: 'Connect Four is played on a grid, with two players, 1 (red) and 2 (blue). The players alternate turns, dropping a piece of their color in the top of a column. The piece will fall down to the further-down unoccupied slot. The game is won when a player makes four in a row (horizontally, vertically, or diagonally and anti-diagonally)',
    featuredImage: './desktop-images/Connect-41.png',
    popupImg: './desktop-images/Connect-42.png',
    technologies: ['Javascript', 'Gitflow', 'Best-Practices', 'Html', 'Css'],
    liveLink: 'https://connect-44.netlify.app/',
    sourceLink: 'https://github.com/Have-Samuel/connect-fourTrl',
  },
  {
    title: 'Printing Data',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required. Has been the industry\'s standard.',
    popupDescription: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry.',
    featuredImage: './desktop-images/drawers.jpg',
    popupImg: './desktop-images/drawers.jpg',
    technologies: ['Javascript', 'Html', 'Css'],
    liveLink: 'https://article-preview-card212.netlify.app/',
    sourceLink: 'https://github.com/Have-Samuel/arcticle-preview-component',
  },
  {
    title: 'Interactive Rating Component',
    description: 'Users should be able to: View the optimal layout for the app depending on their device\'s screen size See hover states for all interactive elements on the page Select and submit a number rating See the "Thank you" card state after submitting a rating',
    popupDescription: 'Users should be able to: View the optimal layout for the app depending on their device\'s screen size See hover states for all interactive elements on the page Select and submit a number rating See the "Thank you" card state after submitting a rating',
    featuredImage: './desktop-images/desKtopVersion.png',
    popupImg: './desktop-images/deSktopVersion.png',
    technologies: ['Flexbox', 'Html', 'Css', 'Gitflow', 'Javascript'],
    liveLink: 'https://rating-component1.netlify.app/',
    sourceLink: 'https://github.com/Have-Samuel/Interactive-rating-component',
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
