export function backBtnIngedientsListener(className) {
  const backBtn = document.querySelector(`.${className}`);
  backBtn.addEventListener('click', onBackToCocktail);
}

function onBackToCocktail(e) {
  console.log('click');
  e.target.closest('div').previousElementSibling.style.display = 'block';
  e.target.closest('div').innerHTML = '';
}
