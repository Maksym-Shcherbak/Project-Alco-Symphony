import { CocktailsAPI } from '../CocktailAPI/CocktailAPI';
import {
  saveToLocalStorage,
  removeFromLocalStorage,
} from './createModalForCocktail';

const cocktailAPI = new CocktailsAPI();
const modal = document.querySelector('.modal-content');

export async function getIngredient(e) {
  if (e.target.nodeName === 'A') {
    e.preventDefault();
    const id = e.target.closest('li').id;
    const ingredient = await cocktailAPI.getIngredients(id);
    console.log(ingredient);
  }
}
