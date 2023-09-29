import { CocktailsAPI } from '../CocktailAPI/CocktailAPI';
import { createCocktailCards } from './renderCocktails';
import { PaginationForCocktails } from '../CocktailAPI/pagination';
import { getQuantityOfCocktails } from './getQuantityOfCocktails';

const cocktailList = document.querySelector('.cocktails-cards');
const container = document.getElementById('tui-pagination-container');
let parts = null;

let lengthForPart = getQuantityOfCocktails();

const paginationForCocktails = new PaginationForCocktails(
  container,
  lengthForPart
);

const cocktailsApi = new CocktailsAPI(lengthForPart);

cocktailsApi
  .getRandomCocktails()
  .then(data => createCocktailCards(data, cocktailList));

cocktailsApi.searchCocktails('f', 'a').then(data => {
  parts = paginationForCocktails.createCardsPerPage(data);
  createCocktailCards(parts[0], cocktailList);
  paginationForCocktails.changePageByClick(
    parts,
    cocktailList,
    createCocktailCards
  );
});
