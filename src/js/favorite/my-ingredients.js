import { PaginationForCocktails } from '../CocktailAPI/pagination';

import '../../js/header/header';
import '../../js/scroll-anime/scroll-anime';
import '../../js/notification/notification';
import '../../js/darktheme/darktheme';

let favoriteIngradientsArray = [];
let parts;
let currentIngradient;
const modalElement = document.querySelector('.ingredient-modal');
const backdrop = document.querySelector('.backdrop');
const paginationElement = document.getElementById('tui-pagination-container');
const ingradientsListElement = document.querySelector(
  '.favorite-ingradients-list'
);
const noFoundElement = document.querySelector('.no-ingradients-wrapper');

const PAGINATION_OPTIONS = {
  totalItems: 0,
  itemsPerPage: 6,
  page: 1,
};

const pagination = new PaginationForCocktails(
  paginationElement,
  PAGINATION_OPTIONS
);
const svgIcon = './img/sprite.svg';
document.addEventListener('DOMContentLoaded', event => {
  favoriteIngradientsArray =
    JSON.parse(localStorage.getItem('ingredients')) || [];

  if (favoriteIngradientsArray.length !== 0) {
    noFoundElement.classList.add('hidden');
    ingradientsListElement.classList.remove('hidden');
  }

  parts = pagination.createCardsPerPage(favoriteIngradientsArray);

  renderIngradients(parts[0], ingradientsListElement);
  pagination.changePageByClick(
    parts,
    ingradientsListElement,
    renderIngradients
  );
});

ingradientsListElement.addEventListener(
  'click' || 'touch',
  ingradientListListener
);

function ingradientListListener(event) {
  if (
    event.target.nodeName === 'LI' ||
    event.target.classList.contains('read-more-button')
  ) {
    modalOpen(event, modalElement);
    modalElement
      .querySelector('.back-button')
      .addEventListener('click', backButtonListener);
    modalElement
      .querySelector('.remove-button')
      .addEventListener('click', removeButtonListener);

    modalElement
      .querySelector('.add-button')
      .addEventListener('click', addButtonListener);
    modalElement
      .querySelector('.close-button')
      .addEventListener('click', closeModal);
    backdrop.addEventListener('click', backdropListener);
    document.addEventListener('keydown', KeyboardEventListener);
  }
  if (event.srcElement.className === 'remove-button') {
    removeButtonListener(event);
    renderIngradients(
      pagination.createCardsPerPage(favoriteIngradientsArray)[0],
      ingradientsListElement
    );
    return;
  }
}
function modalOpen(event, DOMElement) {
  renderIngradientModal(favoriteIngradientsArray, DOMElement, event);

  backdrop.classList.remove('is-hidden');
  document.body.classList.add('modal-open');
}
function KeyboardEventListener(event) {
  if (event.keyCode === 27) {
    closeModal(modalElement);
    document.removeEventListener('keydown', KeyboardEventListener);
  }
}
function backButtonListener() {
  closeModal(modalElement);
}
function closeModal(DOMElement) {
  backdrop.classList.add('is-hidden');
  document.body.classList.remove('modal-open');
  DOMElement.innerHTML = '';
  renderIngradients(
    pagination.createCardsPerPage(favoriteIngradientsArray)[0],
    ingradientsListElement
  );
}
function backdropListener(event) {
  if (event.target.classList.contains('backdrop')) {
    closeModal(modalElement);
  }
}
function removeButtonListener(event) {
  event.target.classList.add('hidden');
  if (event.target.nextElementSibling) {
    event.target.nextElementSibling.classList.remove('hidden');
  }

  for (let index = 0; index < favoriteIngradientsArray.length; index++) {
    const { title } = favoriteIngradientsArray[index];
    if (event.target.dataset.name === title) {
      favoriteIngradientsArray.splice(index, 1);
      localStorage.setItem(
        'ingredients',
        JSON.stringify(favoriteIngradientsArray)
      );
    }
  }
}
function addButtonListener(event) {
  event.target.classList.add('hidden');
  event.target.previousElementSibling.classList.remove('hidden');
  favoriteIngradientsArray.push(currentIngradient);
  localStorage.setItem('ingredients', JSON.stringify(favoriteIngradientsArray));
}
function renderIngradients(ingradientsArray, DOMElement) {
  if (ingradientsArray.length === 0) {
    noFoundElement.classList.remove('hidden');
    ingradientsListElement.classList.add('hidden');
  }
  pagination.hidePagination(6, paginationElement);
  DOMElement.innerHTML = '';
  let alcoholNonalcoholMarkup = 'Non-Alcoholic';
  for (let index = 0; index < ingradientsArray.length; index++) {
    const { title, description, alcohol } = ingradientsArray[index];
    if (alcohol.toLowerCase() === 'yes') {
      alcoholNonalcoholMarkup = 'Alcoholic';
    }
    const markup = `<li data-name="${title}">
    <h2 class="title">${title}</h2>
      <p class="alcohol">${alcoholNonalcoholMarkup}</p>
      <p class="description">${description}</p>
       <div class="buttons-container">
         <button type="button" data-name="${title}" class="read-more-button">Read more</button>
         <button class="remove-button" type="button" data-name="${title}" > <svg class="trash-icon" width="18px" height="18px">
          <use href="${svgIcon}#icon-trash"></use>
        </svg></button>
       </div>
      </li>`;
    DOMElement.insertAdjacentHTML('beforeend', markup);
  }
}

function renderIngradientModal(ingradientsArray, DOMElement, event) {
  DOMElement.innerHTML = '';

  for (let index = 0; index < ingradientsArray.length; index++) {
    let { title, abv, type, country, flavour, description } =
      ingradientsArray[index];
    const noDataMsg = 'Sorry, no data available.';
    if (!abv) abv = 0;
    if (!country) country = noDataMsg;
    if (!description) description = noDataMsg;
    if (!flavour) flavour = noDataMsg;
    if (!type) type = noDataMsg;
    if (event.target.dataset.name === title) {
      currentIngradient = ingradientsArray[index];
      const markup = ` <button
      class="pop_up_modal_close_btn close-button"
      type="button"
      aria-label="close menu review"
      data-first-modal-close
    >
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M18 6L6 18" stroke="#242424" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M6 6L18 18" stroke="#242424" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    </button>
    <h3 class="ingred-header">${title}</h3>
    <p class="ingred-type">${type}</p>
    <p class="ingred-desc">${description}</p>

    <ul class="ingred-desc-list">
      <li class="desc-item">
        <p class="item-text">
          <span class="item-inner-title">Type: </span>${type}
        </p>
      </li>
      <li class="desc-item">
        <p class="item-text">
          <span class="item-inner-title">Country of origin: </span>${country}
        </p>
      </li>
      <li class="desc-item">
        <p class="item-text">
          <span class="item-inner-title">Alcohol by volume: </span>${abv} %
        </p>
      </li>
      <li class="desc-item">
        <p class="item-text">
          <span class="item-inner-title">Flavour: </span>${flavour}
        </p>
      </li>
    </ul>
    <button class="remove-button" type="button" data-name="${title}" >Remove from favorite</button>
      <button class="back-button" type="button">Back</button>
    `;
      DOMElement.insertAdjacentHTML('beforeend', markup);
    }
  }
}
