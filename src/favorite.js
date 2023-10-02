// import { renderFavCoctails } from "./js/favorite/my-cocktails";

// function renderFavCoctails(coctailArray) {
//     const markup = coctailArray
//         .map(({img,title,text}) => {
//             return `
//             <li>
//             <div>
//             <img src="${img}">
//             <h3>${title}</h3>
//             <p>${text}</p>
//             </div>
//             <div>
//             <button type="button">learn more</button>
//             <button type="button">
//             <svg></svg>
//             </button>
//             </div>
//             </li>;
//         `
//         })
//     .join('');
    
//  return markup;
// }

// const favoriteList = document.querySelector('.favorite-list')


// function load(key){
//     try {
//         const value = localStorage.getItem(key)
//         return value === null ? undefined : JSON.parse(value)
//     }
//     catch(error){
//         console.log(error.message);
//     }
// }

// favoriteList.innerHTML=renderFavCoctails(load('favorite'))