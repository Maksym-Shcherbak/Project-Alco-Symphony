import { throttle } from 'lodash';
import { Notify } from 'notiflix';
import { getIngredient } from './ingredFetch';
import {
  addButtonListener,
  removeButtonListener,
} from '../favorite/my-ingredients';
import markupIngredient from './markUpIngr';

const ingrModalRefs = {
  ingredList: document.querySelector('.modal-ingredients-list'),
  ingredModalInner: document.querySelector('.ingred-modal-inner'),
  closeModalBtn: document.querySelector('.ingred-modal-close-btn'),
  backdropIngred: document.querySelector('.backdrop-ingred'),
};

ingrModalRefs.ingredList.addEventListener('click', onIngredClick);

async function onIngredClick(e) {
  const ingredName = e.target.textContent;
  if (e.target.classList.contains('ingredients-link')) {
    try {
      const response = await getIngredient(ingredName);

      const result = response.find(
        ing => ing.title.toLowerCase() === ingredName.toLowerCase()
      );

      markupIngredient(result);
      ingrModalRefs.backdropIngred.classList.remove('is-hidden');
      let addBtn = document.querySelector('.add-to-fav-ing-btn');
      let removeBtn = document.querySelector('.remove-from-fav-ing-btn');
      addBtn.addEventListener('click', () => {
        addIngredientToFav(addBtn, removeBtn, addBtn.dataset.id);
      });
      removeBtn.addEventListener('click', () => {
        removeIngredientFromFav(addBtn, removeBtn, removeBtn.dataset.id);
      });
    } catch (err) {
      Notify.failure('Error occurred!', {
        clickToClose: true,
      });
      console.error(err);
    }
  }
}

ingrModalRefs.backdropIngred.addEventListener('click', closeIngredModal);

function closeIngredModal(e) {
  if (
    e.target !== e.currentTarget &&
    e.target.closest('.ingred-modal-close-btn') !== ingrModalRefs.closeModalBtn
  ) {
    return;
  }
  throttle(cleanIngredMarkup, 100);
  ingrModalRefs.backdropIngred.classList.add('is-hidden');
}

function cleanIngredMarkup() {
  ingrModalRefs.ingreModalInner.innerHTML = '';
}

const addIngredientToFav = (addBtn, removeBtn, id) => {
  addButtonListener('ingredients', id);
  removeBtn.classList.remove('is-hidden');
  addBtn.classList.add('is-hidden');
};

const removeIngredientFromFav = (addBtn, removeBtn, id) => {
  removeButtonListener('ingredients', id);
  addBtn.classList.remove('is-hidden');
  removeBtn.classList.add('is-hidden');
};
