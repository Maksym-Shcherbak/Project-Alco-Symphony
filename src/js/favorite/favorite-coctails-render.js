export function renderFavCoctails(coctailArray) {
  const markup = coctailArray
    .map((item) => {
      return `
        <li class="fav-coctail-card">
          <div class="fav-coctail-card-container">
            <img class="fav-coctail-img" src="${item.drinkThumb}" alt="${item.drink}">
            <h3 class="fav-coctail-titile">${item.drink}</h3>
            <p class="fav-coctail-description">${item.description}</p>
          </div>
          <div>
            <button type="button" class="learn-more-btn">learn more</button>
            <button type="button" class="delete-btn" aria-label="Remove from favorites">
              <svg class="delete-btn-icon" width="18" height="18">
                <use href="../../img/sprite.svg#icon-trash"></use>
              </svg>
            </button>
          </div>
        </li>`;
    })
    .join('');

  return markup;
}

const coctailArray = [
{
drink: "Coctail",
drinkThumb: "link", 
description: "Description",
}
]
const renderedMarkup = renderFavCoctails(coctailArray);
const favCoctailsList = document.querySelector(".fav-coctails-list");
favCoctailsList.innerHTML = renderedMarkup;