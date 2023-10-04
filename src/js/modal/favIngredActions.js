import { cocktailAPI } from './createModalIngredient';

export function onToFavorite() {
  const addBtn = document.querySelector('.add-to-fav');
  addBtn.addEventListener('click', addToFavorite);
}

async function addToFavorite(event) {
  if (event.target.classList.contains('added')) {
    const id = event.target.id;
    const ingredCard = document.getElementById(id);
    removeFromLocalStorage('favorite', id);
    event.target.textContent = 'Add to favorite';
    event.target.classList.remove('added');
    ingredCard.classList.remove('enabled');
  } else {
    const id = event.target.id;
    const ingredCard = document.getElementById(id);
    const ingredlArr = await cocktailAPI.getIngredients(id);
    const ingred = ingredlArr.map(item => {
      return {
        id: item._id,
        img: item.drinkThumb,
        title: item.drink,
        text: item.description,
      };
    });

    let savedIngredients = JSON.parse(localStorage.getItem('favorite')) || [];
    let isInCocktailsArray;
    if (savedIngredients.length !== 0) {
      isInCocktailsArray = savedIngredients.some(item => item.id === id);
    }
    if (!isInCocktailsArray) {
      arr.push(...ingred, ...savedIngredients);
      saveToLocalStorage('favorite', arr);
      arr = [];
      event.target.textContent = 'Remove from favorite';
      event.target.classList.add('added');
      ingredCard.classList.add('enabled');
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

export function removeFromLocalStorage(key, ingredId) {
  try {
    const arrayFavCocktails = JSON.parse(localStorage.getItem(key));
    for (let index = 0; index < arrayFavCocktails.length; index++) {
      const { id } = arrayFavCocktails[index];
      if (ingredId === id) {
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
