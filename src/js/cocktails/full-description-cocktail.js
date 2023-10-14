import * as basicLightbox from 'basiclightbox';
import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock';

export function getFullDescription(fullDescCocktail, cocktailImg, drinkName) {
  const backdrop = document.querySelector('.backdrop');
  const instance = basicLightbox.create(
    `
    <div class="modal modal-description">
    <div class='cocktail-full-info'>
          <div class="cocktail-card-info-thumb">
          <img class="cocktail-card-info-img" src="${cocktailImg}" alt="${drinkName}" loading="lazy" />
          </div>
          <h3 class='cocktail-card-name'>${drinkName}</h3>
          <p class="full-description">${fullDescCocktail}</p> 
          </div>`,
    {
      onShow: instance => disableBodyScroll(document.body),
      onClose: instance => enableBodyScroll(document.body),
    }
  );
  instance.show();
}
