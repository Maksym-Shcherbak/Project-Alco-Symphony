import Pagination from 'tui-pagination';
import 'tui-pagination/dist/tui-pagination.css';
import { renderFavCoctails, coctailArray, favCoctailsList } from './favorite-coctails-render';


const container = document.getElementById('tui-pagination-container');
let lengthForPart = 6;
export class FavCoctailsPagination {
    constructor(container, lengthPart) {
    this.totalCards = 0; 
    this.options = {
      totalItems: 0,
      itemsPerPage: lengthPart,
      visiblePages: 5,
      page: 1,
      centerAlign: true,
        };   
    this.pagination = new Pagination(container, this.options);
        this.chunks = [];

}
    
    designCard(arr) {
    this.totalCards = arr.length;
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

  get lengthForPart() {
    return this.options.itemsPerPage;
  }

  set lengthForPart(number) {
    this.options.itemsPerPage = number;
    console.log(this.options.itemsPerPage);
  }
    
}

function splitParts(arr, totalItems, itemsPerPage) {
  const chunks = [];
  for (let i = 0; i < totalItems; i += itemsPerPage) {
    chunks.push(arr.slice(i, i + itemsPerPage));
  }
  return chunks;
}

if (coctailArray.length >= lengthForPart) {
  const favCocktailsPagination = new FavCoctailsPagination(container, lengthForPart);
  favCocktailsPagination.changePageByClick(coctailArray, favCoctailsList, renderFavCoctails);
}