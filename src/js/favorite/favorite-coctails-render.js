export function renderFavCoctails(coctailArray, container) {
  const markup = coctailArray
    .map((item) => {
      return `
        <li class="fav-coctail-card" id=${item.id}>
          <div class="fav-coctail-card-container">
            <img class="fav-coctail-img" src="${item.img}" alt="${item.title}">
            <h3 class="fav-coctail-titile">${item.title}</h3>
            <p class="fav-coctail-description">${item.text}</p>
          </div>
          <div>
            <button type="button" class="learn-more-btn">learn more</button>
            <button type="button" class="delete-btn" aria-label="Remove from favorites">
              <svg class="delete-btn-icon" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
  <path d="M12 4.5V3.9C12 3.05992 12 2.63988 11.8365 2.31901C11.6927 2.03677 11.4632 1.8073 11.181 1.66349C10.8601 1.5 10.4401 1.5 9.6 1.5H8.4C7.55992 1.5 7.13988 1.5 6.81901 1.66349C6.53677 1.8073 6.3073 2.03677 6.16349 2.31901C6 2.63988 6 3.05992 6 3.9V4.5M7.5 8.625V12.375M10.5 8.625V12.375M2.25 4.5H15.75M14.25 4.5V12.9C14.25 14.1601 14.25 14.7902 14.0048 15.2715C13.789 15.6948 13.4448 16.039 13.0215 16.2548C12.5402 16.5 11.9101 16.5 10.65 16.5H7.35C6.08988 16.5 5.45982 16.5 4.97852 16.2548C4.55516 16.039 4.21095 15.6948 3.99524 15.2715C3.75 14.7902 3.75 14.1601 3.75 12.9V4.5" stroke="#FDFDFF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
            </button>
          </div>
        </li>`;
    })
    .join('');
  container.innerHTML = markup;
 
}




const favoriteList = document.querySelector('.fav-coctails-list')

export function load(key){
  try {
      const value = localStorage.getItem(key)
      return value === null ? undefined : JSON.parse(value)
  }
  catch(error){
      console.log(error.message);
  }
}

renderFavCoctails(load('favorite'),favoriteList)



//  export const coctailArray = [
//   {
//     drink: "Coctail",
//     drinkThumb: "link",
//     description: "Description",
//   },
//   {
// drink: "Coctail",
// drinkThumb: "link", 
// description: "Description",
//   },
//     {
// drink: "Coctail",
// drinkThumb: "link", 
// description: "Description",
//   },
//       {
// drink: "Coctail",
// drinkThumb: "link", 
// description: "Description",
//   },
//         {
// drink: "Coctail",
// drinkThumb: "link", 
// description: "Description",
//   },
//           {
// drink: "Coctail",
// drinkThumb: "link", 
// description: "Description",
//   }      
// ]
