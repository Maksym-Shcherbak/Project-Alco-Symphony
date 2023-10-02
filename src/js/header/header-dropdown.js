/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
const dropbtn = document.querySelector('.dropbtn');
dropbtn.addEventListener('click', myFunction);
function myFunction(e) {
  if (e.currentTarget.nodeName === 'BUTTON')
    document.getElementById('myDropdown').classList.toggle('show');
}

// Close the dropdown if the user clicks outside of it
window.onclick = function (e) {
  if (
    !e.target.matches('.dropbtn') &
    !e.target.matches('.menu-icon-drop') &
    !e.target.matches('.dropbtn-text')
  ) {
    const myDropdown = document.getElementById('myDropdown');
    if (myDropdown.classList.contains('show')) {
      myDropdown.classList.remove('show');
    }
  }
};
