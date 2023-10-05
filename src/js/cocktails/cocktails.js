import { CocktailsAPI } from '../CocktailAPI/CocktailAPI';
import { createCocktailCards } from './renderCocktails';
import { PaginationForCocktails } from '../CocktailAPI/pagination';
import { getQuantityOfCocktails } from './getQuantityOfCocktails';
// import { createModal } from '../pop_up/pop_up_open';
import { setIconFavorite } from '../favourite-btn/favourite-btn';
import { DrinkifyModal } from '../pop_up/pop_up_open';

const cocktailList = document.querySelector('.cocktails-cards');
const container = document.getElementById('tui-pagination-container');
const noFoundBlock = document.querySelector('.not-found-cocktails-container');
let parts = null;
const drinkifyModal = new DrinkifyModal();

const quantity = getQuantityOfCocktails();
const options = {
  totalItems: 0,
  itemsPerPage: quantity.quantityOfCocktails,
  visiblePages: quantity.quantityOfVisiblePages,
  page: 1,
};

const paginationForCocktails = new PaginationForCocktails(container, options);

const cocktailsApi = new CocktailsAPI(quantity.quantityOfCocktails);

async function renderRandomCocktails() {
  noFoundBlock.classList.add('visually-hidden');
  const randomCocktails = await cocktailsApi.getRandomCocktails();
  if (randomCocktails) {
    createCocktailCards(randomCocktails, cocktailList);
    drinkifyModal.selectOpenModalButton();
    setIconFavorite();
    noFoundBlock.classList.add('visually-hidden');
  }
}

renderRandomCocktails();

export function renderCocktailsBySearch(arrayOfCocktails) {
  parts = paginationForCocktails.createCardsPerPage(arrayOfCocktails);
  paginationForCocktails.hidePagination(
    quantity.quantityOfCocktails,
    container
  );
  cocktailList.innerHTML = '';
  createCocktailCards(parts[0], cocktailList);
  drinkifyModal.selectOpenModalButton();
  paginationForCocktails.changePageByClick(
    parts,
    cocktailList,
    createCocktailCards,
    DrinkifyModal,
    setIconFavorite
  );
}
