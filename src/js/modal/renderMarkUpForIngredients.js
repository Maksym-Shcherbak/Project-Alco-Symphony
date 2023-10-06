export function renderModalForIngredient(arr, container) {
  let ingredients;
  const markup = arr.map(item => {
    ingredients = item.ingredients;
    const noDataMsg = 'Sorry, no data available.';
    if (!item.abv) item.abv = 0;
    if (!item.country) item.country = noDataMsg;
    if (!item.description) item.description = noDataMsg;
    if (!item.flavour) item.flavour = noDataMsg;
    if (!item.type) item.type = noDataMsg;
    return ` 
    <button
      class="pop_up_modal_close_btn"
      type="button"
      aria-label="close menu review"
      data-first-modal-close
    >
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
        <path d="M18 6L6 18"  stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M6 6L18 18"  stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    </button>
    <h3 class="ingred-header">${item.title}</h3>
    <p class="ingred-type">${item.type}</p>
    <p class="ingred-desc">${item.description}</p>

    <ul class="ingred-desc-list">
      <li class="desc-item">
        <p class="item-text">
          <span class="item-inner-title">Type: </span>${item.type}
        </p>
      </li>
      <li class="desc-item">
        <p class="item-text">
          <span class="item-inner-title">Country of origin: </span>${item.country}
        </p>
      </li>
      <li class="desc-item">
        <p class="item-text">
          <span class="item-inner-title">Alcohol by volume: </span>${item.abv} %
        </p>
      </li>
      <li class="desc-item">
        <p class="item-text">
          <span class="item-inner-title">Flavour: </span>${item.flavour}
        </p>
      </li>
    </ul>
      <button type="button" id="${item._id}" class="modal-cocktail-btn modal-ing-btn add-to-fav">Add to favorite
      </button>
      <button type="button" class="modal-cocktail-btn  modal-ingredient-back">Back
      </button>
    `;
  });
  container.innerHTML = markup;
}
