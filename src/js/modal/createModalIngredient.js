import { CocktailsAPI } from '../CocktailAPI/CocktailAPI';
import { onToFavorite, removeFromLocalStorage } from './favIngredActions';
import { createModal } from '../pop_up/pop_up_open';
import { renderModalForIngredient } from './renderMarkUpForIngredients';

export const cocktailAPI = new CocktailsAPI();
const modal = document.querySelector('.modal-content');

export async function getIngredient(e) {
  if (e.target.nodeName === 'A') {
    e.preventDefault();
    const id = e.target.closest('li').id;
    const ingredient = await cocktailAPI.getIngredients(id);
    console.log(ingredient);
    // console.log(ingredient.map()id);
    renderModalForIngredient(ingredient, modal);
    createModal();
    onToFavorite();
  }
}
