export function createModalForCocktail(arr, container) {
  let ingredients;
  const markup = arr.map(item => {
    ingredients = item.ingredients;
    return `
   <button
      class="pop_up_modal_close_btn"
      type="button"
      aria-label="close menu review"
      data-first-modal-close
    >
      <svg class="pop_up_modal_close_icon" width="24" height="24">
        <use href="./images/icons.svg#icon-x-close"></use>
      </svg>
    </button>
    <div class="cocktail-img-and-ingredients">
      <div class="cocktail-modal-thumb">
        <img class="cocktail-modal-img" width='150px'src="${item.drinkThumb}" alt="${item.drink}" loading="lazy" />
      </div>
      <div class="modal-ingredients-container">
        <h3 class="cocktail-modal-name">${item.drink}</h3>
        <h4 class="cocktail-modal-ingredients">Ingredients:</h4>
        <p class="modal-text">Per cocktail</p>
        <ul class="cocktail-modal-list">
        </ul>
      </div>
    </div>
        <div class="cocktail-modal-instructions">
        <h4 class="modal-instructions-title">Instructions:</h4>
        <p class="modal-instructions-text">${item.instructions}</p>
        </div>
        <p style="display: none;">${item.description}</p>
        <button type="button" id="${item._id}" class="modal-cocktail-btn add-to-fav">Add to favorite</button>
        <button type="button" class="modal-cocktail-btn modal-cocktail-back" data-first-modal-close>Back</button></div`;
  });
  container.innerHTML = markup;
  return ingredients;
}

export function createListIngredients(arr, container) {
  const markup = arr
    .map(item => {
      let measure = '';
      if (item.measure) {
        measure = item.measure;
      }
      return `<li class="cocktail-modal-item" id="${item.ingredientId}">
        <p class="item-text">
          <span class="ingredients-measure">${measure}</span><a class="modal-cocktail-ingredient link" href="#">${item.title}</a>
        </p>
      </li>`;
    })
    .join('');
  container.innerHTML = markup;
}
