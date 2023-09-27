const keyboard = document.querySelector('.big-keyboard');

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
  const keyboardMurkup = alphabetArray.map(key => `<li>${key}</li>`).join('');

  keyboard.innerHTML = keyboardMurkup;
}

function resizeHandler() {
  const screenWidth = window.innerWidth;

  if (screenWidth >= 768) {
    renderKeyboard(alphabetArray);
  } else {
    keyboard.innerHTML = '';
  }
}

resizeHandler();
