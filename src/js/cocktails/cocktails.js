import { CocktailsAPI } from '../CocktailAPI/CocktailAPI';
import { createCocktailCards } from './renderCocktails';
import { PaginationForCocktails } from '../CocktailAPI/pagination';
import { getQuantityOfCocktails } from './getQuantityOfCocktails';
import { loaddedArr } from '../favourite-btn/favourite-btn';


const cocktailList = document.querySelector('.cocktails-cards');
const container = document.getElementById('tui-pagination-container');
let parts = null;

const quantity = getQuantityOfCocktails();
const options = {
  totalItems: 0,
  itemsPerPage: quantity.quantityOfCocktails,
  visiblePages: quantity.quantityOfVisiblePages,
  page: 1,
};

const paginationForCocktails = new PaginationForCocktails(container, options);

const cocktailsApi = new CocktailsAPI(quantity.quantityOfCocktails);

cocktailsApi
  .getRandomCocktails()
  .then(data => {
    createCocktailCards(data, cocktailList)
  for(let i = 0; i < loaddedArr.lengh; i+=1){
    if(loaddedArr[i].title === data.drink){
      console.log(data.drink)
    }
  }
  });

export function renderCocktailsBySearch(arrayOfCocktails) {
  parts = paginationForCocktails.createCardsPerPage(arrayOfCocktails);
  paginationForCocktails.hidePagination(
    quantity.quantityOfCocktails,
    container
  );
  createCocktailCards(parts[0], cocktailList);
  paginationForCocktails.changePageByClick(
    parts,
    cocktailList,
    createCocktailCards
  );
}
