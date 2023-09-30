import Pagination from 'tui-pagination';
import 'tui-pagination/dist/tui-pagination.css';
import { renderFavCoctails, coctailArray, favCoctailsList } from './favorite-coctails-render';
import { PaginationForCocktails } from '../CocktailAPI/pagination'


const container = document.getElementById('tui-pagination-container');
let parts = null;
const cocktailList = document.querySelector('.fav-coctails-list');

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

function renderCocktailsBySearch(array) {
  parts = favCocktailsPagination.createCardsPerPage(array);
  favCocktailsPagination.hidePagination(
    options.itemsPerPage,
    container
  );
  renderFavCoctails(parts[0], cocktailList);

    favCocktailsPagination.changePageByClick(
    parts,
    cocktailList,
    renderFavCoctails,
  );
}

renderCocktailsBySearch(coctailArray);

  
  
