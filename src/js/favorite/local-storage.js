import { renderFavCocktails } from './favorite-cocktails-render';
import { removeFromLocalStorage } from '../modal/createModalForCocktail';
import { renderCocktailsBySearch } from '../favorite/fav-cocktails-pagination';
import { deleteFavCocktail, errorFromLS } from '../notification/notification'



const container = document.querySelector('.fav-cocktails-list');
export let storageCocktailArr = getFromLocalStorage('favorite');
const hideContainer = document.querySelector('.not-found-cocktails-container');
const listFavCocktail = document.querySelector('.fav-cocktails-list');

export function getFromLocalStorage(key) {
  try {
    const value = localStorage.getItem(key);
    return JSON.parse(value);
  } catch (error) {
    errorFromLS()
    return null;
  }
}

if (storageCocktailArr && storageCocktailArr.length > 0) {
  renderCocktailsBySearch(storageCocktailArr);
  hideContainer.classList.add('visually-hidden');
}

listFavCocktail.addEventListener('click', (event) => {
  if (event.target.classList.contains('delete-btn')) {
    const id = event.target.closest('li').id;
    let updateLocalStorage = getFromLocalStorage('favorite');
    if (updateLocalStorage && updateLocalStorage.length > 0) {
      removeFromLocalStorage('favorite', id);
      updateLocalStorage = getFromLocalStorage('favorite');
      renderCocktailsBySearch(updateLocalStorage);
      deleteFavCocktail();
    } 
    if (updateLocalStorage.length === 0) {
      hideContainer.classList.remove('visually-hidden');
    }
  }
})


