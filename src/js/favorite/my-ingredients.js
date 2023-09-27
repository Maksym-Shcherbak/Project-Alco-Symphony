// let favoriteIngradientsArray = [
//   {
//     _id: '64aebb7f82d96cc69e0eb4a6',
//     title: 'Gin',
//     ingredientThumb:
//       'https://res.cloudinary.com/dy7bjyqln/image/upload/v1695419232/drinkify/ingredients/Gin.png',
//     'thumb-medium':
//       'https://res.cloudinary.com/dy7bjyqln/image/upload/v1695419232/drinkify/ingredients/Gin-Medium.png',
//     'thumb-small':
//       'https://res.cloudinary.com/dy7bjyqln/image/upload/v1695419232/drinkify/ingredients/Gin-Small.png',
//     abv: '40',
//     alcohol: 'Yes',
//     description:
//       'Gin is liquor which derives its predominant flavour from juniper berries (Juniperus communis). From its earliest origins in the Middle Ages, gin has evolved over the course of a millennium from a herbal medicine to an object of commerce in the spirits industry. Gin was developed on the basis of the older jenever, and became popular in Great Britain (particularly in London) when William of Orange, leader of the Dutch Republic, occupied the English, Scottish, and Irish thrones with his wife Mary. Gin is one of the broadest categories of spirits, represented by products of various origins, styles, and flavour profiles that all revolve around juniper as a common ingredient.',
//     type: 'Gin',
//     flavour: 'English-style gin, citrus, juniper',
//     country: 'United States',
//   },
//   {
//     _id: '64f1d5cc69d8333cf130fc22',
//     title: 'Campari',
//     description:
//       'A famous aperitif that is a bitter, red, herbal liqueur, well-known for its distinctive flavor and vibrant red color. Often used in cocktails.',
//     type: 'Liqueur',
//     alcohol: 'Yes',
//     abv: '24-28.5',
//     flavour: 'Bitter and Herbal',
//     country: 'Italy',
//   },
// ];
// localStorage.setItem(
//   'favorite-ingradients',
//   JSON.stringify(favoriteIngradientsArray)
// );
document.addEventListener('DOMContentLoaded', () => {
  favoriteIngradientsArray = JSON.parse(
    localStorage.getItem('favorite-ingradients')
  );
  return favoriteIngradientsArray;
});
let favoriteIngradientsArray = [];
const ingradientsListElement = document.querySelector(
  '.favorite-ingradients-list'
);
const modalElement = document.querySelector('.ingradient-modal');
ingradientsListElement.addEventListener('click', ingradientListListener);
function ingradientListListener(event) {
  modalOpen(event, modalElement);
  modalElement
    .querySelector('.back-button')
    .addEventListener('click', backButtonListener);
  modalElement
    .querySelector('.remove-button')
    .addEventListener('click', removeButtonListener);
}
function modalOpen(event, DOMElement) {
  if (event.target.nodeName !== 'BUTTON') {
    return;
  }

  for (let index = 0; index < favoriteIngradientsArray.length; index++) {
    const { title, abv, type, country, flavour, description } =
      favoriteIngradientsArray[index];
    if (event.target.dataset.name === title) {
      const markup = `<h2 class="title">${title}</h2>
      <p class="type">${type}</p>
      <div>
        <p class="description">${description}</p>
        <ul class="list">
          <li>Type: ${type}</li>
          <li>Country of origin: ${country}</li>
          <li>Alcohol by volume: ${abv}%</li>
          <li> Flavour: ${flavour}</li>
        </ul>
      </div>
      <button class="remove-button" type="button" data-name="${title}">Remove from favorite</button>
      <button class="back-button" type="button">Back</button>`;
      DOMElement.insertAdjacentHTML('beforeend', markup);
    }
    DOMElement.classList.add('open');
  }
}
function backButtonListener() {
  closeModal(modalElement);
}
function closeModal(DOMElement) {
  DOMElement.classList.remove('open');
  DOMElement.innerHTML = '';
}
function removeButtonListener(event) {
  for (let index = 0; index < favoriteIngradientsArray.length; index++) {
    const { title } = favoriteIngradientsArray[index];
    if (event.target.dataset.name === title) {
      favoriteIngradientsArray.splice(index, 1);
      localStorage.setItem(
        'favorite-ingradients',
        JSON.stringify(favoriteIngradientsArray)
      );
      console.log(favoriteIngradientsArray);
    }
  }
}
