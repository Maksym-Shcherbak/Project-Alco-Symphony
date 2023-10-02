import { CocktailsAPI } from '../CocktailAPI/CocktailAPI';

const cocktailAPI = new CocktailsAPI();

export async function getIngredient(e) {
  if (e.target.nodeName === 'A') {
    e.preventDefault();
    const id = e.target.closest('li').id;
    const ingredient = await cocktailAPI.getIngredients(id);
    console.log(ingredient);
  }
}
