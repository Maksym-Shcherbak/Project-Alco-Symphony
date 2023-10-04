import { CocktailsAPI } from '../CocktailAPI/CocktailAPI';
import {
  createModalForCocktail,
  createListIngredients,
} from './renderMarkupModalForCocktail';
import { getIngredient } from './createModalIngredient';
import { createModal } from '../pop_up/pop_up_open';
import { load } from '../favourite-btn/favourite-btn';

const cocktailsList = document.querySelector('.cocktails-cards');
const modal = document.querySelector('.modal-content');
const backdrop = document.querySelector('.backdrop');
let arr = [];
const cocktailAPI = new CocktailsAPI();

cocktailsList.addEventListener('click', getCocktailById);

async function getCocktailById(e) {
  if (e.target.classList.contains('cocktail-card-learn')) {
    const cocktailId = e.target.closest('li').id;
    const favoriteBtn = e.target.nextElementSibling;
    const cocktailInfo = await cocktailAPI.getFullCocktailInfo(cocktailId);
    console.log(cocktailInfo);
    const ingredients = createModalForCocktail(cocktailInfo, modal);
    const ingredientsList = document.querySelector('.cocktail-modal-list');
    createListIngredients(ingredients, ingredientsList);
    setStateFavorite();
    ingredientsList.addEventListener('click', getIngredient);
    createModal();
    onToFavorite();
  }
}

export function onToFavorite() {
  const addBtn = document.querySelector('.add-to-fav');
  addBtn.addEventListener('click', addToFavorite);
}

async function addToFavorite(event) {
  if (event.target.classList.contains('added')) {
    const id = event.target.id;
    const cocktailCard = document.getElementById(id);
    removeFromLocalStorage('favorite', id);
    event.target.textContent = 'Add to favorite';
    event.target.classList.remove('added');
    cocktailCard.classList.remove('enabled');
  } else {
    const id = event.target.id;
    const cocktailCard = document.getElementById(id);
    const cocktailArr = await cocktailAPI.getFullCocktailInfo(id);
    const cocktail = cocktailArr.map(item => {
      return {
        id: item._id,
        img: item.drinkThumb,
        title: item.drink,
        text: item.description,
      };
    });
    let savedCocktails = JSON.parse(localStorage.getItem('favorite')) || [];
    let isInCocktailsArray;
    if (savedCocktails.length !== 0) {
      isInCocktailsArray = savedCocktails.some(item => item.id === id);
    }
    if (!isInCocktailsArray) {
      arr.push(...cocktail, ...savedCocktails);
      saveToLocalStorage('favorite', arr);
      arr = [];
      event.target.textContent = 'Remove from favorite';
      event.target.classList.add('added');
      cocktailCard.classList.add('enabled');
    }
  }
}

export function saveToLocalStorage(key, value) {
  try {
    const parsedValue = JSON.stringify(value);
    localStorage.setItem(key, parsedValue);
  } catch (error) {
    console.log(error.message);
  }
}

export function removeFromLocalStorage(key, cocktailId) {
  try {
    const arrayFavCocktails = JSON.parse(localStorage.getItem(key));
    for (let index = 0; index < arrayFavCocktails.length; index++) {
      const { id } = arrayFavCocktails[index];
      if (cocktailId === id) {
        arrayFavCocktails.splice(index, 1);
        localStorage.setItem(key, JSON.stringify(arrayFavCocktails));
        const arrayCocktails = JSON.parse(localStorage.getItem(key));
      }
    }
  } catch (error) {
    console.log(error.message);
  }
}

function setStateFavorite() {
  const loaddedArr = load('favorite');
  const cocktailModalBtn = document.querySelector('.add-to-fav');
  console.log(cocktailModalBtn);
  const cocktailId = cocktailModalBtn.id;
  console.log(cocktailId);
  if (loaddedArr) {
    loaddedArr.forEach(item => {
      if (item.id === cocktailId) {
        cocktailModalBtn.classList.add('added');
        cocktailModalBtn.textContent = 'Remove from favorite';
      }
    });
  }
}
