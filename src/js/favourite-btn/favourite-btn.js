const coctailsList = document.querySelector('.cocktails-cards');

const arr = [];

coctailsList.addEventListener('click', favBtnClick);

function favBtnClick(event) {
  let svg = null;
  if (event.target.classList.contains('favoriteIcon')) {
    svg = event.target;
  } else if (event.target.classList.contains('cocktail-card-button')) {
    svg = event.target.children[0];
  }
  svg.attributes.fill.value = '#fdfdff';
  svg.classList.add('colorEnable');
  console.dir(svg.attributes.fill.value);
  const object = {
    id: event.target.closest('li').id,
    img: event.target.closest('li').children[0].children[0].children[0].src,
    title: event.target.closest('li').children[0].children[1].textContent,
    text: event.target.closest('li').children[0].children[2].textContent,
    favorite: true,
  };
  arr.push(object);
  console.log(object);
  console.log(arr);
  saveToLocalStorage('favorite', arr);
}

function saveToLocalStorage(key, value) {
  try {
    const parsedValue = JSON.stringify(value);
    localStorage.setItem(key, parsedValue);
  } catch (error) {
    console.log(error.message);
  }
}

function removeFavorite(id) {}
