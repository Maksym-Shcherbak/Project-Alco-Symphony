import Pagination from 'tui-pagination';

const container = document.getElementById('tui-pagination-container');
const options = {
  totalItems: 0,
  itemsPerPage: 9,
  visiblePages: 5,
  page: 1,
};
const instance = new Pagination(container, options);

instance.getCurrentPage();
