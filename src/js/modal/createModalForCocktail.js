import { CocktailsAPI } from '../CocktailAPI/CocktailAPI';
import {
  createModalForCocktail,
  createListIngredients,
} from './renderMarkupModalForCocktail';
import { getIngredient } from './createModalIngredient';
import { createModal } from '../pop_up/pop_up_open';

const cocktailsList = document.querySelector('.cocktails-cards');
const modal = document.querySelector('.modal-content');
const backdrop = document.querySelector('.backdrop');
let arr = [];
const cocktailAPI = new CocktailsAPI();

cocktailsList.addEventListener('click', getCocktailById);

async function getCocktailById(e) {
  if (e.target.classList.contains('cocktail-card-learn')) {
    const cocktailId = e.target.closest('li').id;
    const cocktailInfo = await cocktailAPI.getFullCocktailInfo(cocktailId);
    console.log(cocktailInfo);
    const ingredients = createModalForCocktail(cocktailInfo, modal);
    const ingredientsList = document.querySelector('.cocktail-modal-list');
    createListIngredients(ingredients, ingredientsList);
    ingredientsList.addEventListener('click', getIngredient);
    createModal();
    onToFavorite();
  }
}

export function onToFavorite() {
  const addBtn = document.querySelector('.add-to-fav');
  addBtn.addEventListener('click', addToFavorite);
}

function onBackCocktailBtn() {
  const backBtn = document.querySelector('.modal-cocktail-back');
  backBtn.addEventListener('click', closeModal);
}

function closeModal() {
  backdrop.classList.toggle('js_open_backdrop');
  modal.classList.toggle('js_open');
  document.body.classList.toggle('backdrop_open');
}

async function addToFavorite(event) {
  if (event.target.classList.contains('add-to-fav')) {
    const id = event.target.id;
    const cocktailArr = await cocktailAPI.getFullCocktailInfo(id);
    const cocktail = cocktailArr.map(item => {
      return {
        id: item._id,
        img: item.drinkThumb,
        title: item.drink,
        text: item.description,
        favorite: true,
      };
    });
    let savedCocktails = JSON.parse(localStorage.getItem('favorite')) || [];
    let isInCocktailsArray;
    if (savedCocktails.length !== 0) {
      isInCocktailsArray = savedCocktails.some(item => item.id === id);
    }
    // else {
    //   isInCocktailsArray = true;
    // }
    if (!isInCocktailsArray) {
      arr.push(...cocktail, ...savedCocktails);
      saveToLocalStorage('favorite', arr);
      arr = [];
      event.target.textContent = 'Remove from favorite';
      event.target.classList.remove('add-to-fav');
    }
  } else {
    const id = event.target.id;
    removeFromLocalStorage('favorite', id);
    event.target.textContent = 'Add to favorite';
    event.target.classList.add('add-to-fav');
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
      }
    }
  } catch (error) {
    console.log(error.message);
  }
}
