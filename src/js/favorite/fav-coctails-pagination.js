import Pagination from 'tui-pagination';
import 'tui-pagination/dist/tui-pagination.css';
import { renderFavCoctails, coctailArray, favCoctailsList } from './favorite-coctails-render';


const container = document.getElementById('tui-pagination-container');
export class FavCoctailsPagination {
    constructor(container) {
    this.totalCards = 0; 
    this.itemsPerPage = 6;
    this.options = {
      totalItems: 0,
      itemsPerPage: this.itemsPerPage,
      visiblePages: this.getVisiblePages(),
      page: 1,
      centerAlign: true,
        };   
    this.pagination = new Pagination(container, this.options);
    this.chunks = [];

    }
  
  getVisiblePages() {
    if (window.innerWidth < 768) {
      return 5;
    } else {
      return 7;
    }
  }
  
    designCard(arr) {
    this.totalCards = arr.length;
    this.options.totalItems = this.totalCards;
    this.pagination.reset(this.totalCards);
    this.chunks = splitParts(arr, this.totalCards, this.options.itemsPerPage);
    return this.chunks;
        
}
    changePageByClick(arr, container, renderPage) {
    this.pagination.on('afterMove', (event) => {
      const currentPage = event.page;
      const index = currentPage - 1;
      renderPage(arr[index], container);
    });
    }
  
  updatePagination() {
    this.options.visiblePages = this.getVisiblePages();    
    this.pagination.setItemsPerPage(this.itemsPerPage);
    this.pagination.reset();
  } 
}

const favCocktailsPagination = new FavCoctailsPagination(container);
favCocktailsPagination.changePageByClick(coctailArray, favCoctailsList, renderFavCoctails);

window.addEventListener('load', () => {
  favCocktailsPagination.updatePagination();
});

window.addEventListener('resize', () => {
  favCocktailsPagination.updatePagination();
});
