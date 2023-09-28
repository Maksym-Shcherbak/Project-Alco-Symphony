import SlimSelect from 'slim-select';
import '../../../node_modules/slim-select/dist/slimselect.css';
import SearchApiService from './search-api';

const customKeyboard = document.querySelector('.custom-keyboard');
const form = document.querySelector('.search-form');

const searchApiService = new SearchApiService();

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

function renderKeyboard(alphabetArray) {
  const keyboard = document.querySelector('.big-keyboard');

  const keyboardMurkup = alphabetArray.map(key => `<li>${key}</li>`).join('');

  keyboard.innerHTML = keyboardMurkup;
}

function renderSelect(alphabetArray) {
  const keyboard = document.querySelector('#alphabet-select');
  const selectMurkup = alphabetArray
    .map(key => `<option value="${key}">${key}</option>`)
    .join('');

  keyboard.innerHTML = selectMurkup;

  new SlimSelect({
    select: '#alphabet-select',
    settings: {
      showSearch: false,
    },
  });

  const selectFace = document.querySelector('.ss-main');
  selectFace.style.backgroundColor = '#7E8FDD66';

  selectFace.addEventListener('click', () => {
    selectFace.style.backgroundColor = '#9CDFDF';
  });
}

function resizeHandler() {
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

async function searchCoctailsByName(e) {
  e.preventDefault();

  searchApiService.query = e.currentTarget.elements.searchQuery.value.trim();

  if (searchApiService.query === '') {
    console.log('Empty Request');
  }

  try {
    const searchData = await searchApiService.fetchCoctails('s');

    if (searchData) {
      console.log(searchData);
    }
  } catch (error) {
    console.error(error);
  }

  form.reset();
}

async function searchCoctailsByLetter(letter) {
  searchApiService.query = letter;

  if (searchApiService.query === '') {
    console.log('Empty Request');
  }

  try {
    const searchData = await searchApiService.fetchCoctails('f');

    if (searchData) {
      console.log(searchData);
    }
  } catch (error) {
    console.error(error);
  }
}
