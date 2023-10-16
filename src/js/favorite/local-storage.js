import { removeFromLocalStorage } from '../modal/createModalForCocktail';
import { renderCocktailsBySearch } from '../favorite/fav-cocktails-pagination';
import {
  deleteFromFavoriteMessage,
  errorFromLS,
} from '../notification/notification';
import { getFullDescription } from '../cocktails/full-description-cocktail';
export let storageCocktailArr = getFromLocalStorage('favorite');

const hideContainer = document.querySelector('.not-found-cocktails-container');
const listFavCocktail = document.querySelector('.fav-cocktails-list');

export function getFromLocalStorage(key) {
  try {
    const value = localStorage.getItem(key);
    return JSON.parse(value);
  } catch (error) {
    errorFromLS();
    return null;
  }
}

if (storageCocktailArr && storageCocktailArr.length > 0) {
  renderCocktailsBySearch(storageCocktailArr);
  hideContainer.classList.add('visually-hidden');
}

listFavCocktail.addEventListener('click', event => {
  if (event.target.classList.contains('delete-btn')) {
    const id = event.target.closest('li').id;
    let updateLocalStorage = getFromLocalStorage('favorite');
    if (updateLocalStorage && updateLocalStorage.length > 0) {
      removeFromLocalStorage('favorite', id);
      updateLocalStorage = getFromLocalStorage('favorite');
      renderCocktailsBySearch(updateLocalStorage);
      deleteFromFavoriteMessage('cocktail');
    }
    if (updateLocalStorage.length === 0) {
      hideContainer.classList.remove('visually-hidden');
    }
  }
  if (event.target.classList.contains('fav-cocktail-card')) {
    const fullDescriptionPar = event.target.children[0].children[2];
    const fullDescription = fullDescriptionPar.textContent;
    const drinkNameTitle = fullDescriptionPar.previousElementSibling;
    const drinkName = drinkNameTitle.textContent;
    const drinkImgSrc = drinkNameTitle.previousElementSibling.children[0].src;
    getFullDescription(fullDescription, drinkImgSrc, drinkName);
  }
});

// const removeModalButton = document.querySelector('.added');
// removeByButton(removeModalButton);

function removeByButton(element) {
  element.addEventListener('click', e => {
    const id = e.target.id;
    removeFromLocalStorage('favorite', id);
    let updateLocalStorage = getFromLocalStorage('favorite');
    renderCocktailsBySearch(updateLocalStorage);
    deleteFavCocktail();
    drinkifyModal.selectOpenModalButton();
    // listFavCocktail.addEventListener('click', getIngredientInfo);
    backdrop.classList.add('is-hidden');
    body.classList.remove('modal-open');
  });
}
