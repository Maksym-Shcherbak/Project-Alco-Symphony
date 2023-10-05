import { CocktailsAPI } from '../CocktailAPI/CocktailAPI';
import { renderCocktailsBySearch } from '../cocktails/cocktails';
export { searchCoctailsByName, searchCoctailsByLetter };
import { setIconFavorite } from '../favourite-btn/favourite-btn';
import { DrinkifyModal } from '../pop_up/pop_up_open';

const form = document.querySelector('.search-form');
const cocktailsTitle = document.querySelector('.drinkify-cocktails-title');

const searchApiService = new CocktailsAPI();
const drinkifyModal = new DrinkifyModal();

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
      setIconFavorite();
      // drinkifyModal.selectOpenModalButton();
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
      setIconFavorite();
      // drinkifyModal.selectOpenModalButton();
    }
  } catch (error) {
    console.error(error);
  }
}
