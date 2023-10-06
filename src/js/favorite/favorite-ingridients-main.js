import { PaginationForCocktails } from '../CocktailAPI/pagination';
import {
  errorFromLS,
  deleteFavCocktail,
} from '../../js/notification/notification';
import { DrinkifyModal } from '../pop_up/pop_up_open';
import '../../js/header/header';
import '../../js/scroll-anime/scroll-anime';
import '../../js/darktheme/darktheme';

const modalElement = document.querySelector('.ingredient-modal');
const backdrop = document.querySelector('.backdrop');
const body = document.querySelector('body');
const paginationElement = document.getElementById('tui-pagination-container');
const ingradientsListElement = document.querySelector(
  '.favorite-ingradients-list'
);
const noFoundElement = document.querySelector('.no-ingradients-wrapper');
const drinkifyModal = new DrinkifyModal();

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
let parts;

document.addEventListener('DOMContentLoaded', event => {
  let favoriteIngradientsArray =
    JSON.parse(localStorage.getItem('ingredients')) || [];

  if (favoriteIngradientsArray.length !== 0) {
    noFoundElement.classList.add('hidden');
    ingradientsListElement.classList.remove('hidden');
  }

  parts = pagination.createCardsPerPage(favoriteIngradientsArray);

  renderIngradients(parts[0], ingradientsListElement);
  drinkifyModal.selectOpenModalButton();
  ingradientsListElement.addEventListener('click', getIngredientInfo);
  pagination.changePageByClick(
    parts,
    ingradientsListElement,
    renderIngradients,
    DrinkifyModal
  );
});

// listener for remove button
ingradientsListElement.addEventListener('click', event => {
  if (event.target.classList.contains('remove-button')) {
    const id = event.target.closest('li').id;
    removeFromLocalStorage('ingredients', id);
    let updateLocalStorage = getFromLocalStorage('ingredients');
    renderIngradients(updateLocalStorage, ingradientsListElement);
    deleteFavCocktail();
    drinkifyModal.selectOpenModalButton();
    ingradientsListElement.addEventListener('click', getIngredientInfo);
  }
});

// render card of ingridient
function renderIngradients(ingradientsArray, element) {
  pagination.hidePagination(6, paginationElement);
  let alcoholNonalcoholMarkup = 'Non-Alcoholic';
  const markup = ingradientsArray
    .map(item => {
      const { title, description, alcohol, id } = item;
      if (alcohol.toLowerCase() === 'yes') {
        alcoholNonalcoholMarkup = 'Alcoholic';
      }
      return `<li data-name="${title}" id="${id}">
    <h2 class="title">${title}</h2>
      <p class="alcohol">${alcoholNonalcoholMarkup}</p>
      <p class="description">${description}</p>
       <div class="buttons-container">
         <button type="button" data-name="${title}" class="read-more-button" data-first-modal-open>Read more</button>
         <button class="remove-button" type="button" data-name="${title}" > <svg class="trash-icon" width="18px" height="18px">
          <use href="${svgIcon}#icon-trash"></use>
        </svg></button>
       </div>
      </li>`;
    })
    .join('');
  console.log(element);
  element.innerHTML = markup;
}

function removeFromLocalStorage(key, cocktailId) {
  try {
    const arrayFavCocktails = JSON.parse(localStorage.getItem(key));
    for (let index = 0; index < arrayFavCocktails.length; index++) {
      const { id } = arrayFavCocktails[index];
      if (cocktailId === id) {
        arrayFavCocktails.splice(index, 1);
        localStorage.setItem(key, JSON.stringify(arrayFavCocktails));
      }
    }
  } catch (error) {
    console.log(error.message);
  }
}

function getFromLocalStorage(key) {
  try {
    const value = localStorage.getItem(key);
    return JSON.parse(value);
  } catch (error) {
    errorFromLS();
    return null;
  }
}

function getIngredientInfo(e) {
  if (e.target.classList.contains('read-more-button')) {
    const id = e.target.closest('li').id;
    const ingredients = getFromLocalStorage('ingredients');
    console.log(ingredients);
    const ingredient = ingredients.find(item => item.id === id);
    const ingredientArr = [];
    ingredientArr.push(ingredient);
    renderIngredientModal(ingredientArr, modalElement);
    drinkifyModal.selectCloseModalButton();
    const removeModalButton = document.querySelector('.remove-button-modal');
    removeByButton(removeModalButton);
  }
}

// render modal for ingredient
function renderIngredientModal(ingredientsArray, DOMElement) {
  DOMElement.innerHTML = '';

  for (let index = 0; index < ingredientsArray.length; index++) {
    let { title, abv, type, country, flavour, description, id } =
      ingredientsArray[index];
    const noDataMsg = 'Sorry, no data available.';
    if (!abv) abv = 0;
    if (!country) country = noDataMsg;
    if (!description) description = noDataMsg;
    if (!flavour) flavour = noDataMsg;
    if (!type) type = noDataMsg;
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
    <button id="${id}" class="remove-button-modal" type="button" data-name="${title}" >Remove from favorite</button>
      <button class="back-button" type="button" data-first-modal-close>Back</button>
    `;
    DOMElement.insertAdjacentHTML('beforeend', markup);
  }
}

// remove from modal
function removeByButton(element) {
  element.addEventListener('click', e => {
    const id = e.target.id;
    removeFromLocalStorage('ingredients', id);
    let updateLocalStorage = getFromLocalStorage('ingredients');
    renderIngradients(updateLocalStorage, ingradientsListElement);
    deleteFavCocktail();
    drinkifyModal.selectOpenModalButton();
    ingradientsListElement.addEventListener('click', getIngredientInfo);
    backdrop.classList.add('is-hidden');
    body.classList.remove('modal-open');
  });
}
