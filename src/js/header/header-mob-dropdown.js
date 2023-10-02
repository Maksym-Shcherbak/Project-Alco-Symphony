const dropbtn = document.querySelector('.mob-dropbtn');
dropbtn.addEventListener('click', myFunction);
function myFunction(e) {
  if (e.currentTarget.nodeName === 'BUTTON')
    document.getElementById('mob-myDropdown').classList.toggle('show');
}

// Close the dropdown if the user clicks outside of it
window.onclick = function (e) {
  if (
    !e.target.matches('.mob-dropbtn') &
    !e.target.matches('.mob-menu-icon-drop') &
    !e.target.matches('.mob-dropbtn-text')
  ) {
    const myDropdown = document.getElementById('mob-myDropdown');
    if (myDropdown.classList.contains('show')) {
      myDropdown.classList.remove('show');
    }
  }
};
