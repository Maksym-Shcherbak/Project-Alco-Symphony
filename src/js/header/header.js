
import './header-menu';

import './header-dropdown';

/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
const dropbtn = document.querySelector('.menu-icon-drop');
dropbtn.addEventListener('click', myFunction);
function myFunction() {
  document.getElementById('myDropdown').classList.toggle('show');
}

// Close the dropdown if the user clicks outside of it
window.onclick = function (e) {
  if (!e.target.matches('.menu-icon-drop')) {
    var myDropdown = document.getElementById('myDropdown');
    if (myDropdown.classList.contains('show')) {
      myDropdown.classList.remove('show');
    }
  }
};

