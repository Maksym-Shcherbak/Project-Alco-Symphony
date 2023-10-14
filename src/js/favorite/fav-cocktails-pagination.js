import 'tui-pagination/dist/tui-pagination.css';
import { renderFavCocktails } from './favorite-cocktails-render';
import { PaginationForCocktails } from '../CocktailAPI/pagination';
import { DrinkifyModal } from '../pop_up/pop_up_open';
import { setIconFavorite } from '../favourite-btn/favourite-btn';

const container = document.getElementById('tui-pagination-container');
let parts = null;
const cocktailList = document.querySelector('.fav-cocktails-list');
const drinkifyModal = new DrinkifyModal();

const quantity = getVisiblePages();

function getVisiblePages() {
  if (window.innerWidth < 768) {
    return 5;
  } else {
    return 7;
  }
}
const options = {
  totalItems: 0,
  itemsPerPage: 6,
  visiblePages: quantity,
  page: 1,
};

const favCocktailsPagination = new PaginationForCocktails(container, options);

export function renderCocktailsBySearch(array) {
  parts = favCocktailsPagination.createCardsPerPage(array);
  favCocktailsPagination.hidePagination(options.itemsPerPage, container);
  renderFavCocktails(parts[0], cocktailList);
  drinkifyModal.selectOpenModalButton();
  favCocktailsPagination.changePageByClick(
    parts,
    cocktailList,
    renderFavCocktails,
    DrinkifyModal,
    setIconFavorite
  );
}
