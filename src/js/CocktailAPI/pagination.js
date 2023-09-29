import Pagination from 'tui-pagination';
import { splitParts } from '../cocktails/splitParts';
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

  get lengthForPart() {
    return this.options.itemsPerPage;
  }

  set lengthForPart(number) {
    this.lengthPart = number;
    console.log(this.options.itemsPerPage);
  }
}
