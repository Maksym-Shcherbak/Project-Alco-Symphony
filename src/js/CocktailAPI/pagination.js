import Pagination from 'tui-pagination';
import { splitParts } from './splitParts';
import 'tui-pagination/dist/tui-pagination.css';

export class PaginationForCocktails {
  constructor(container, options) {
    this.totalCards = 0;
    this.options = options;
    this.options.template = {
      page: '<a href="#" class="tui-page-btn">{{page}}</a>',
      currentPage:
        '<strong class="tui-page-btn tui-is-selected">{{page}}</strong>',
      moveButton:
        '<a href="#" class="tui-page-btn tui-{{type}} custom-class-{{type}}">' +
        '<span class="tui-ico-{{type}}">{{type}}</span>' +
        '</a>',
      disabledMoveButton:
        '<span class="tui-page-btn tui-is-disabled tui-{{type}} custom-class-{{type}}">' +
        '<span class="tui-ico-{{type}}">{{type}}</span>' +
        '</span>',
      moreButton:
        '<a href="#" class="tui-page-btn tui-{{type}}-is-ellip custom-class-{{type}}">' +
        '<span class="tui-ico-ellip">...</span>' +
        '</a>',
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

  changePageByClick(arr, container, renderPage, classModal, setStage) {
    this.pagination.on('afterMove', event => {
      const currentPage = event.page;
      const index = currentPage - 1;
      renderPage(arr[index], container);
      setStage();
      const modal = new classModal();
      modal.selectOpenModalButton();
    });
  }

  hidePagination(cardsForPage, paginationDiv) {
    if (this.totalCards > cardsForPage) {
      paginationDiv.classList.remove('visually-hidden');
    } else {
      paginationDiv.classList.add('visually-hidden');
    }
  }

  get lengthForPart() {
    return this.options.itemsPerPage;
  }

  set lengthForPart(number) {
    this.lengthPart = number;
  }
}
