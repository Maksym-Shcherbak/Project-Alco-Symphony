import { CocktailsAPI } from '../CocktailAPI/CocktailAPI';
import { createCocktailCards } from './renderCocktails';
import { instance } from './pagination';
import 'tui-pagination/dist/tui-pagination.css';

const cocktailList = document.querySelector('.cocktails-cards');
let lengthPart;
let totalCards = 0;
let chunks = [];
function getQuantityOfCocktails() {
  if (window.innerWidth < 1280) {
    lengthPart = 8;
    return lengthPart;
  } else {
    return (lengthPart = 9);
  }
}
getQuantityOfCocktails();
const cocktailsApi = new CocktailsAPI(lengthPart);
cocktailsApi
  .getRandomCocktails()
  .then(data => createCocktailCards(data, cocktailList));

// cocktailsApi
//   .searchCocktails('f', 'g')
//   .then(data => {
//     console.log(data);
//     return data;
//   })
//   .then(data => {
//     totalCards = data.length;
//     instance.reset(totalCards);
//     chunks = splitParts(data, totalCards);
//     console.log(chunks);
//     createCocktailCards(chunks[0], cocktailList);
//   });

// instance.on('afterMove', event => {
//   const currentPage = event.page;
//   createCocktailCards(chunks[currentPage - 1], cocktailList);
// });

function splitParts(arr, total) {
  // передаём массив, который нужно разбить
  if (total > lengthPart) {
    // проверяем, имеет ли переданный массив длину больше, чем длина части
    let chunks = [], // подготавливаем возращаемый массив с частями
      parts = Math.floor(total / lengthPart); // сколько частей получится
    for (
      let i = 0;
      i < total;
      i += lengthPart // проходим по массиву, шаг длине части
    )
      chunks.push(arr.slice(i, i + lengthPart)); // добавляем часть в массив с частями

    return chunks; // возвращаем массив
  } else return arr; // если получаемый массив меньше длины части, то возвращаем его же.
}
