import { cocktailAPI } from './createModalIngredient';
// імпорт нижче не спрацьовує, причини не знаю.
// import {
//   saveToLocalStorage,
//   removeFromLocalStorage,
// } from './createModalForCocktail';

export function onToFavorite() {
  const addBtn = document.querySelector('.add-to-fav');
  addBtn.addEventListener('click', addToFavorite);
}
// функцію додавання до улюблених довелося написати окрему, оскільки змінні інші, та звернення на бекенд інше
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
      console.log(item);
      return {
        id: item._id,
        abv: item.abv,
        country: item.country,
        title: item.drink,
        description: item.description,
        flavour: item.flavour,
        type: item.type,
      };
    });

    let savedIngredients = JSON.parse(localStorage.getItem('favorite')) || [];
    let isInIngredArray;
    if (savedIngredients.length !== 0) {
      isInIngredArray = savedIngredients.some(item => item.id === id);
    }
    if (!isInIngredArray) {
      let arr = [];
      arr.push(...ingred, ...savedIngredients);
      saveToLocalStorage('favorite', arr);
      event.target.textContent = 'Remove from favorite';
      event.target.classList.add('added');
      ingredCard.classList.add('enabled');
    }
  }
}
// наступні дві функції можна було б імпортувати з './createModalForCocktail', що власне я і намагався зробити, але виникала помилка, тому довелося заново їх тут писати. При чому чомусь без умови експорту вони і тут  теж не працюють.
export function saveToLocalStorage(key, value) {
  try {
    const parsedValue = JSON.stringify(value);
    localStorage.setItem(key, parsedValue);
    console.log('saved to Ls');
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
