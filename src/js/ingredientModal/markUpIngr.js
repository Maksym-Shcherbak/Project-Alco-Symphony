import { refs } from './refs';

export default function markupIngredient({
  abv,
  country,
  description,
  flavour,
  title,
  type,
  _id,
}) {
  let favIngIds;
  let LSIngList = JSON.parse(localStorage.getItem('ingredients'));
  if (LSIngList) {
    if (LSIngList.length !== 0) favIngIds = LSIngList;
  }
  let isInFavs;
  if (favIngIds) {
    isInFavs = favIngIds.includes(_id) ? true : false;
  }
  const noDataMsg = 'На жаль дані тимчасово відсутні.';
  if (!abv) abv = 0;
  if (!country) country = noDataMsg;
  if (!description) description = noDataMsg;
  if (!flavour) flavour = noDataMsg;
  if (!type) type = noDataMsg;

  refs.ingredModalInner.innerHTML = `    
    <h3 class="ingred-header">${title}</h3>
    <p class="ingred-type">${type}</p>
    <p class="ingred-desc">${description}</p>

    <ul class="ingred-desc-list">
      <li class="desc-item">
        <p class="item-text">
          <span class="item-inner-title">Type: </span>${type}
        </p>
      </li>
      <li class="desc-item">
        <p class="item-text">
          <span class="item-inner-title">Country of origin: </span>${country}
        </p>
      </li>
      <li class="desc-item">
        <p class="item-text">
          <span class="item-inner-title">Alcohol by volume: </span>${abv} %
        </p>
      </li>
      <li class="desc-item">
        <p class="item-text">
          <span class="item-inner-title">Flavour: </span>${flavour}
        </p>
      </li>
    </ul>
    <button type="button" class="modal-to-favorite-btn add-to-fav-ing-btn" data-id="${_id}">add to favorite</button>
    <button type="button" class="modal-to-favorite-btn remove-from-fav-ing-btn" data-id="${_id}">remove from favorite</button>
     `;
  let addToFavBtn = document.querySelector('.add-to-fav-ing-btn');
  let removeFromFavBtn = document.querySelector('.remove-from-fav-ing-btn');
  if (isInFavs) {
    addToFavBtn.classList.add('is-hidden');
  } else {
    removeFromFavBtn.classList.add('is-hidden');
  }
}
