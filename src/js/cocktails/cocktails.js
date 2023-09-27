import { CocktailsAPI } from '../CocktailAPI/CocktailAPI';
import { createCocktailCards } from './renderCocktails';

const cocktailList = document.querySelector('.cocktails-cards');
let quantityOfCocktails;
function getQuantityOfCocktails() {
  if (window.innerWidth > 1279) {
    quantityOfCocktails = 9;
    return quantityOfCocktails;
  } else {
    return (quantityOfCocktails = 8);
  }
}
getQuantityOfCocktails();
console.log(quantityOfCocktails);
const cocktailsApi = new CocktailsAPI(quantityOfCocktails);
cocktailsApi
  .getRandomCocktails()
  .then(data => createCocktailCards(data, cocktailList));
