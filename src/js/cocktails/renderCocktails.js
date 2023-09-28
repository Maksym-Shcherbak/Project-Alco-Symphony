export const createCocktailCards = (arr, container) => {
  const markup = arr
    .map(
      item => `<li class="cocktail-card">
      <div class='cocktail-card-info'>
      <div class="cocktail-card-info-thumb">
      <img class="cocktail-card-info-img" src="${item.drinkThumb}" alt="${item.drink}" loading="lazy" />
      </div>
      <h3 class='cocktail-card-name'>${item.drink}</h3>
      <p class="cocktail-card-description">${item.description}</p>
      </div>
      <div class="cocktail-card-controls">
        <button type="button" class="cocktail-card-learn">Learn more</button>
        <button type="button" class="cocktail-card-button add" ><svg class="add-button-icon" width="26" height="26"><use href="./img/sprite.svg#icon-heart"></use></svg></button>
      </div>
    </li>`
    )
    .join('');
  container.innerHTML = markup;
};
