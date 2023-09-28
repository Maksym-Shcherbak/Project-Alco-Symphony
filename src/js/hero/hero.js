import SlimSelect from 'slim-select';
import '../../../node_modules/slim-select/dist/slimselect.css';

const customKeyboard = document.querySelector('.custom-keyboard');

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
}

function resizeHandler() {
  const screenWidth = window.innerWidth;

  if (screenWidth >= 768) {
    customKeyboard.innerHTML = `<ul class="big-keyboard"></ul>`;
    renderKeyboard(alphabetArray);
  } else {
    customKeyboard.innerHTML = `<select id="alphabet-select"></select>`;
    renderSelect(alphabetArray);
  }
}

resizeHandler();
