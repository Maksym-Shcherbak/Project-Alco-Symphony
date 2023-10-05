import { CocktailsAPI } from '../CocktailAPI/CocktailAPI';
import { renderCocktailsBySearch } from '../cocktails/cocktails';
export { searchCoctailsByName, searchCoctailsByLetter };
import { setIconFavorite } from '../favourite-btn/favourite-btn';
import { DrinkifyModal } from '../pop_up/pop_up_open';
import { needSearchQuery } from '../notification/notification';

const form = document.querySelector('.search-form');
const cocktailsTitle = document.querySelector('.drinkify-cocktails-title');
const cocktailList = document.querySelector('.cocktails-cards');
const noFoundBlock = document.querySelector('.not-found-cocktails-container');
const container = document.getElementById('tui-pagination-container');

const searchApiService = new CocktailsAPI();

async function searchCoctailsByName(e) {
  e.preventDefault();

  searchApiService.query = e.currentTarget.elements.searchQuery.value.trim();

  if (searchApiService.query === '') {
    needSearchQuery();
  }

  const searchData = await searchApiService.searchCocktails('s');

  if (searchData) {
    cocktailList.innerHTML = '';
    renderCocktailsBySearch(searchData);
    cocktailsTitle.innerText = 'Searching results';
    setIconFavorite();
    noFoundBlock.classList.add('visually-hidden');
  } else {
    noFoundBlock.classList.remove('visually-hidden');
    container.classList.add('visually-hidden');
    cocktailList.innerHTML = '';
  }

  form.reset();
}

async function searchCoctailsByLetter(letter) {
  searchApiService.query = letter;

  if (searchApiService.query === '') {
    needSearchQuery();
  }

  const searchData = await searchApiService.searchCocktails('f');

  if (searchData) {
    renderCocktailsBySearch(searchData);
    cocktailsTitle.innerText = 'Searching results';
    setIconFavorite();
    noFoundBlock.classList.add('visually-hidden');
  } else {
    noFoundBlock.classList.remove('visually-hidden');
    cocktailList.innerHTML = '';
    container.classList.add('visually-hidden');
  }
}
