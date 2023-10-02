export function createModalForCocktail(arr, container) {
  let ingredients;
  const markup = arr.map(item => {
    ingredients = item.ingredients;
    return `<div class="modal-content" id="${item._id}">"<div class="cocktail-modal-thumb">
          <img class="cocktail-modal-img" width='150px'src="${item.drinkThumb}" alt="${item.drink}" loading="lazy" />
          </div>
          <h3 class="cocktail-modal-name">${item.drink}</h3>
        <h4 class="cocktail-modal-ingredients">Ingredients:</h4>
        <p class="modal-text">Per cocktail</p>
        <ul class="cocktail-modal-list">
        </ul>
        <h4 class="cocktail-modal-instructions">Instructions:</h4>
        <p class="modal-instructions">${item.instructions}</p>
        <p style="display: none;">${item.description}</p>
        <button type="button" class="modal-cocktail-btn add-to-fav">Add to favorite</button>
        <button type="button" class="modal-cocktail-btn modal-cocktail-back">Back</button></div`;
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
