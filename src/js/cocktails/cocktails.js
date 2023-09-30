import { CocktailsAPI } from '../CocktailAPI/CocktailAPI';
import { createCocktailCards } from './renderCocktails';
import { PaginationForCocktails } from '../CocktailAPI/pagination';
import { getQuantityOfCocktails } from './getQuantityOfCocktails';
import {
  searchCoctailsByName,
  searchCoctailsByLetter,
} from '../hero/search-coctails';
import { resizeHandler } from '../hero/hero';

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

export function renderCocktailsBySearch(arrayOfCocktails) {
  parts = paginationForCocktails.createCardsPerPage(arrayOfCocktails);
  paginationForCocktails.hidePagination(lengthForPart, container);
  createCocktailCards(parts[0], cocktailList);
  paginationForCocktails.changePageByClick(
    parts,
    cocktailList,
    createCocktailCards
  );
}
