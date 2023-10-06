import { DrinkifyModal } from '../pop_up/pop_up_open';

export function backBtnIngedientsListener(className) {
  const backBtn = document.querySelector(`.${className}`);
  backBtn.addEventListener('click', onBackToCocktail);
}

const drinkifyModal = new DrinkifyModal();
function onBackToCocktail(e) {
  console.log('click');
  e.target.closest('div').previousElementSibling.style.display = 'block';
  drinkifyModal.selectCloseModalButton();
  e.target.closest('div').innerHTML = '';
}