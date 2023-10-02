import { renderFavCocktails } from './favorite-cocktails-render';


const container = document.querySelector('.fav-cocktails-list');
export let storageCocktailArr = getFromLocalStorage('favorite');
const hideContainer = document.querySelector('.not-found-cocktails-container');
const deleteBtns = document.querySelectorAll('.delete-btn')


function getFromLocalStorage(key) {
    try {
        const value = localStorage.getItem(key);
        return JSON.parse(value);
    }
    catch (error) {
        console.log(error.message);
        return null;
    }
}

if (storageCocktailArr && storageCocktailArr.length > 0) {
  renderFavCocktails(storageCocktailArr, container);
  hideContainer.classList.add('visually-hidden')
}


function removeFromLocalStorage(index) {
  if (!storageCocktailArr || storageCocktailArr.length === 0)
    return;
  
  storageCocktailArr.splice(index, 1);
  // getFromLocalStorage('favorite');
  localStorage.setItem('favorite', JSON.stringify(storageCocktailArr));
  renderFavCocktails(storageCocktailArr, container);

}
deleteBtns.forEach((btn) => {
 btn.addEventListener('click', () => {
  const listItem = btn.closest('.fav-cocktail-card');
    const index = Array.from(container.children).indexOf(listItem);
    removeFromLocalStorage(index)
})
})



// function removeFromLocalStorage(key, value) {
//   try {
//     const findIndex = getFromLocalStorage(key).indexOf(value);
//     getFromLocalStorage(key).splice(findIndex, 1);
//     localStorage.setItem(key, JSON.stringify(getFromLocalStorage(key)));
//   } 
//   catch (error) {
//     console.log(error.message);
//   }
//   return;
// }

// deleteBtn.addEventListener('click', removeFromLocalStorage)




// function removeFromLocalStorage() {
//   const id = this.closest('.fav-cocktail-card').dataset.id;
//   const updatedCocktailArr = storageCocktailArr.filter(item => item.id !== id);
//   localStorage.setItem('favorite', JSON.stringify(updatedCocktailArr));
//   storageCocktailArr = updatedCocktailArr;

//   this.closest('.fav-cocktail-card').remove();
// }

// if (deleteBtn) {
//   deleteBtn.addEventListener('click', function(event) {
//   if (event.target.classList.contains('delete-btn')) {
//     removeFromLocalStorage.call(event.target);
//   }
// });
// }

