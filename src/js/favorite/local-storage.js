import { renderFavCoctails, coctailArray } from '../favorite/favorite-coctails-render';
import { saveToLocalStorage } from '../favourite-btn/favourite-btn';

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

const container = document.querySelector('.fav-coctails-list');
 
const storageCoctailArr = getFromLocalStorage('coctailArray');

if (storageCoctailArr && storageCoctailArr.length > 0) {
    coctailArray = storageCoctailArr;
    renderFavCoctails(coctailArray, container);
}

saveToLocalStorage('coctailArray', coctailArray);