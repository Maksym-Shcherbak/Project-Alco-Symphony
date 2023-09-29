import SearchApiService from './search-api';
export { searchCoctailsByName, searchCoctailsByLetter };

const form = document.querySelector('.search-form');
const searchApiService = new SearchApiService();

async function searchCoctailsByName(e) {
  e.preventDefault();

  searchApiService.query = e.currentTarget.elements.searchQuery.value.trim();

  if (searchApiService.query === '') {
    console.log('Empty Request');
  }

  try {
    const searchData = await searchApiService.fetchCoctails('s');

    if (searchData) {
      console.log(searchData);
    }
  } catch (error) {
    console.error(error);
  }

  form.reset();
}

async function searchCoctailsByLetter(letter) {
  searchApiService.query = letter;

  if (searchApiService.query === '') {
    console.log('Empty Request');
  }

  try {
    const searchData = await searchApiService.fetchCoctails('f');

    if (searchData) {
      console.log(searchData);
    }
  } catch (error) {
    console.error(error);
  }
}
