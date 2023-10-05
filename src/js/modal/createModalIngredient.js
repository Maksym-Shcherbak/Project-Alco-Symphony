import { CocktailsAPI } from '../CocktailAPI/CocktailAPI';
import { onToFavoriteIngredient } from './favIngredActions';
import { renderModalForIngredient } from './renderMarkUpForIngredients';
import { setStateFavorite } from './createModalForCocktail';
import { backBtnIngedientsListener } from './ingredBackAction';
import { DrinkifyModal } from '../pop_up/pop_up_open';

export const cocktailAPI = new CocktailsAPI();
const ingredientModal = document.querySelector('.ingredient-modal');
const cocktailModal = document.querySelector('.cocktail-modal');
const drinkifyModal = new DrinkifyModal();

export async function getIngredient(e) {
  if (e.target.nodeName === 'A') {
    e.preventDefault();
    const id = e.target.closest('li').id;
    const ingredient = await cocktailAPI.getIngredients(id);
    renderModalForIngredient(ingredient, ingredientModal);
    ingredientModal.classList.remove('visually-hidden');
    cocktailModal.classList.add('visually-hidden');
    setStateFavorite('ingredients', 'modal-ing-btn');
    drinkifyModal.selectCloseModalButton();
    onToFavoriteIngredient('modal-ing-btn');
    backBtnIngedientsListener('modal-ingredient-back');
  }
}
