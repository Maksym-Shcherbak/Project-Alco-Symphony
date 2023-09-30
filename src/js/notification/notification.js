import { Notify } from 'notiflix/build/notiflix-notify-aio';
// ------------------------------------------

export const successRequest = quantity => {
  Notify.success(`Great choice! We found ${quantity} cocktail.`, {
    cssAnimationStyle: 'zoom',
    position: 'center-top',
  });
};

export const badRequest = () => {
  Notify.failure(
    'Sorry, there are no cocktails matching your search query. Please try again.',
    {
      cssAnimationStyle: 'zoom',
      position: 'center-top',
    }
  );
};

export const needSearchQuery = () => {
  Notify.info('Please, write something', {
    cssAnimationStyle: 'zoom',
    position: 'center-top',
  });
};

export const endListOfPictures = () => {
  Notify.info("We're sorry, but you've reached the end of search results", {
    cssAnimationStyle: 'zoom',
    position: 'center-top',
  });
};

// -------------------------------------------
// function handleCardButtonClick() {
//   Notiflix.Notify.success('Mmm, great choice!');
// }
// const learnButtons = document.querySelectorAll('.cocktail-card-button');
// learnButtons.forEach(button => {
//   button.addEventListener('click', handleCardButtonClick);
// });
