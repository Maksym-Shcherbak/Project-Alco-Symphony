import { DrinkifyModal } from '../pop_up/pop_up_open';

export function backBtnIngedientsListener(className) {
  const backBtn = document.querySelector(`.${className}`);
  backBtn.addEventListener('click', onBackToCocktail);
}

const drinkifyModal = new DrinkifyModal();
function onBackToCocktail(e) {
  e.target
    .closest('div')
    .previousElementSibling.classList.remove('visually-hidden');
  drinkifyModal.selectCloseModalButton();
  e.target.closest('div').innerHTML = '';
}
