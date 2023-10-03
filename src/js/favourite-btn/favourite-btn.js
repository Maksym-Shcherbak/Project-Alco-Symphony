// import { load } from "../favorite/favorite-coctails-render";
import {
  saveToLocalStorage,
  removeFromLocalStorage,
} from '../modal/createModalForCocktail';

const coctailsList = document.querySelector('.cocktails-cards');

let arr = [];

function load(key) {
  try {
    const value = localStorage.getItem(key);
    return value === null ? undefined : JSON.parse(value);
  } catch (error) {
    console.log(error.message);
  }
}
export const loaddedArr = load('favorite');

function setIconFavorite() {
  if (loaddedArr) {
    console.log('yes');
    loaddedArr.forEach(item => {
      const savedCocktailCard = document.getElementById(item.id);
      console.log(savedCocktailCard);
      if (savedCocktailCard) {
        savedCocktailCard.classList.add('enabled');
      }
    });
  }
}
setIconFavorite();

coctailsList.addEventListener('click', favBtnClick);

function favBtnClick(event) {
  if (event.target.classList.contains('cocktail-card-button')) {
    if (event.target.closest('li').classList.contains('enable')) {
      const id = event.target.closest('li').id;
      removeFromLocalStorage('favorite', id);
      event.target.closest('li').classList.remove('enable');
    } else {
      event.target.closest('li').classList.add('enable');
      const object = {
        id: event.target.closest('li').id,
        img: event.target.closest('li').children[0].children[0].children[0].src,
        title: event.target.closest('li').children[0].children[1].textContent,
        text: event.target.closest('li').children[0].children[2].textContent,
        isInFavorite: 'true',
      };
      let savedCocktails = load('favorite') || [];
      let isInCocktailsArray;
      const id = event.target.closest('li').id;
      if (savedCocktails.length !== 0) {
        isInCocktailsArray = savedCocktails.some(item => item.id === id);
      }
      if (!isInCocktailsArray) {
        arr.push(object, ...savedCocktails);
        saveToLocalStorage('favorite', arr);
        arr = [];
      }
    }
  }
}
