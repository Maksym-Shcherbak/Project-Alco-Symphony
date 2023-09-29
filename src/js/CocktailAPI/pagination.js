import Pagination from 'tui-pagination';
import { splitParts } from './splitParts';
import 'tui-pagination/dist/tui-pagination.css';

export class PaginationForCocktails {
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

  createCardsPerPage(arr) {
    this.totalCards = arr.length;
    this.pagination.reset(this.totalCards);
    this.chunks = splitParts(arr, this.totalCards, this.options.itemsPerPage);
    return this.chunks;
  }

  changePageByClick(arr, container, renderPage) {
    this.pagination.on('afterMove', event => {
      const currentPage = event.page;
      const index = currentPage - 1;
      renderPage(arr[index], container);
    });
  }

  get lengthForPart() {
    return this.options.itemsPerPage;
  }

  set lengthForPart(number) {
    this.lengthPart = number;
    console.log(this.options.itemsPerPage);
  }
}
