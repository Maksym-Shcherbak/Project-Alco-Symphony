import SlimSelect from 'slim-select';
import '../../../node_modules/slim-select/dist/slimselect.css';
export { renderKeyboard, renderSelect };

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
