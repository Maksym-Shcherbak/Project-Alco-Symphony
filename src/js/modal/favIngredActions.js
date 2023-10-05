import { cocktailAPI } from './createModalIngredient';
// імпорт нижче не спрацьовує, причини не знаю.
import {
  saveToLocalStorage,
  removeFromLocalStorage,
} from './createModalForCocktail';

export function onToFavoriteIngredient(className) {
  const addBtn = document.querySelector(`.${className}`);
  addBtn.addEventListener('click', addToFavorite);
  console.log(addBtn);
}
// функцію додавання до улюблених довелося написати окрему, оскільки змінні інші, та звернення на бекенд інше
async function addToFavorite(event) {
  if (event.target.classList.contains('added')) {
    console.log(event.target.id);
    const id = event.target.id;
    const ingredCard = document.getElementById(id);
    removeFromLocalStorage('ingredients', id);
    event.target.textContent = 'Add to favorite';
    event.target.classList.remove('added');
    ingredCard.classList.remove('enabled');
  } else {
    console.log(event.target.id);
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

    let savedIngredients =
      JSON.parse(localStorage.getItem('ingredients')) || [];
    let isInIngredArray;
    if (savedIngredients.length !== 0) {
      isInIngredArray = savedIngredients.some(item => item.id === id);
    }
    if (!isInIngredArray) {
      let arr = [];
      arr.push(...ingred, ...savedIngredients);
      saveToLocalStorage('ingredients', arr);
      event.target.textContent = 'Remove from favorite';
      event.target.classList.add('added');
      ingredCard.classList.add('enabled');
    }
  }
}
