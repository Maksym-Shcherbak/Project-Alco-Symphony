import { CocktailsAPI } from '../CocktailAPI/CocktailAPI';
import { renderCocktailsBySearch } from '../cocktails/cocktails';
export { searchCoctailsByName, searchCoctailsByLetter };

const form = document.querySelector('.search-form');
const cocktailsTitle = document.querySelector('.drinkify-cocktails-title');

const searchApiService = new CocktailsAPI();

async function searchCoctailsByName(e) {
  e.preventDefault();

  searchApiService.query = e.currentTarget.elements.searchQuery.value.trim();

  if (searchApiService.query === '') {
    console.log('Empty Request');
  }

  try {
    const searchData = await searchApiService.searchCocktails('s');

    if (searchData) {
      renderCocktailsBySearch(searchData);
      cocktailsTitle.innerText = 'Searching results';
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
    const searchData = await searchApiService.searchCocktails('f');

    if (searchData) {
      renderCocktailsBySearch(searchData);
      cocktailsTitle.innerText = 'Searching results';
    }
  } catch (error) {
    console.error(error);
  }
}
