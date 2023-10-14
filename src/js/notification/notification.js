import { Notify } from 'notiflix/build/notiflix-notify-aio';
// ------------------------------------------

export const successRequest = quantity => {
  Notify.success(`Great choice! We found ${quantity} cocktail.`, {
    cssAnimationStyle: 'zoom',
    position: 'center-top',
    showOnlyTheLastOne: true,
  });
};

export const badRequest = () => {
  Notify.failure(
    'Sorry, there are no cocktails matching your search query. Please try again.',
    {
      cssAnimationStyle: 'zoom',
      position: 'center-top',
      showOnlyTheLastOne: true,
    }
  );
};

export const needSearchQuery = () => {
  Notify.info('Please, write something', {
    cssAnimationStyle: 'zoom',
    position: 'center-top',
    showOnlyTheLastOne: true,
  });
};

export const endListOfPictures = () => {
  Notify.info("We're sorry, but you've reached the end of search results", {
    cssAnimationStyle: 'zoom',
    position: 'center-top',
    showOnlyTheLastOne: true,
  });
};

export const deleteFromFavoriteMessage = name => {
  Notify.info(`The ${name} has been removed from your favorite ${name}s!`, {
    position: 'right-top',
    cssAnimationDuration: 800,
    cssAnimationStyle: 'from-top',
    fontSize: '18px',
    showOnlyTheLastOne: true,
  });
};

export const errorFromLS = () => {
  Notify.failure('Ooops...Something went wrong!Please try again.', {
    position: 'right-top',
    cssAnimationDuration: 800,
    fontSize: '18px',
    showOnlyTheLastOne: true,
  });
};

export const addToFavoriteMessage = name => {
  Notify.success(`The ${name} has been added to favorite`, {
    position: 'right-top',
    cssAnimationDuration: 800,
    fontSize: '18px',
    showOnlyTheLastOne: true,
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
