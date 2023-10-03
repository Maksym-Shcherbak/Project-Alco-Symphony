import { renderKeyboard, renderSelect } from './render-alphabets';
import {
  searchCoctailsByName,
  searchCoctailsByLetter,
} from './search-coctails';

const customKeyboard = document.querySelector('.custom-keyboard');
const form = document.querySelector('.search-form');
const buttonEl = document.querySelector('.first-button');

buttonEl.addEventListener('click', moveToCoctails);

function moveToCoctails() {
  const sectionCoctails = document.querySelector('.drinkify-cocktails');
  const sectionPosition = sectionCoctails.offsetTop;
  window.scrollTo({
    top: sectionPosition,
    behavior: 'smooth',
  });
}

window.addEventListener('resize', resizeHandler);

const alphabetArray = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z',
  '1',
  '2',
  '3',
  '4',
  '5',
  '6',
  '7',
  '8',
  '9',
  '0',
];

export function resizeHandler() {
  const screenWidth = window.innerWidth;

  if (screenWidth >= 768) {
    customKeyboard.innerHTML = `<ul class="big-keyboard"></ul>`;
    renderKeyboard(alphabetArray);

    const keyboardEl = document.querySelectorAll('.custom-keyboard li');
    let selectedLetter = null;

    keyboardEl.forEach(item => {
      item.addEventListener('click', () => {
        if (selectedLetter) {
          selectedLetter.style.backgroundColor = '';
        }
        item.style.backgroundColor = '#9CDFDF';
        selectedLetter = item;

        const letter = item.textContent;

        searchCoctailsByLetter(letter);
      });
    });
  } else {
    customKeyboard.innerHTML = `<select id="alphabet-select"></select>`;
    renderSelect(alphabetArray);

    const selectEl = document.querySelector('#alphabet-select');
    selectEl.addEventListener('change', setOutput);

    function setOutput(e) {
      const letter = e.currentTarget.value;
      searchCoctailsByLetter(letter);
    }
  }
}

resizeHandler();

form.addEventListener('submit', searchCoctailsByName);
