import '../pop_up/pop_up_open';

const cocktailsList = document.querySelector('.cocktails-cards');
const backdrop = document.querySelector('.backdrop');
const modal = document.querySelector('.modal');
const closeBtn = document.querySelector('.cross');

// cocktailsList.addEventListener('click', onLearnMoreBtnClick);

// closeBtn.addEventListener('click', onCloseBtnClick);

function onCloseBtnClick() {
  backdrop.classList.toggle('js_open_backdrop');
  modal.classList.toggle('js_open');
  document.body.classList.toggle('backdrop_open');
}

function onLearnMoreBtnClick(event) {
  if (event.target.classList.contains('cocktail-card-learn')) {
    backdrop.classList.toggle('js_open_backdrop');
    modal.classList.toggle('js_open');
    document.body.classList.toggle('backdrop_open');
    backdrop.addEventListener('click', onBackdropClick);
    document.body.addEventListener('keydown', onEscClick);
  }
}

function onBackdropClick(event) {
  if (event.currentTarget === event.target) {
    backdrop.classList.toggle('js_open_backdrop');
    modal.classList.toggle('js_open');
    document.body.classList.toggle('backdrop_open');
  }
}

function onEscClick(event) {
  if (event.code === 'Escape') {
    backdrop.classList.toggle('js_open_backdrop');
    modal.classList.toggle('js_open');
    document.body.classList.toggle('backdrop_open');
    document.body.removeEventListener('keydown', onEscClick);
  }
}
