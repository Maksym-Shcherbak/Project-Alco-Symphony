const dropbtn = document.querySelector('.mob-dropbtn');
const iconDrop = document.querySelector('.mob-menu-icon-drop');
// const iconUp = document.querySelector('.mob-menu-icon-up');

dropbtn.addEventListener('click', myFunction);
function myFunction(e) {
  if (e.currentTarget.nodeName === 'BUTTON')
    document.getElementById('mob-myDropdown').classList.toggle('show');
  document.getElementById('mob-icon-drop').classList.toggle('revers');
}

// Close the dropdown if the user clicks outside of it
window.onclick = function (e) {
  if (
    !e.target.matches('.mob-dropbtn') &
    !e.target.matches('.mob-menu-icon-drop') &
    !e.target.matches('.mob-dropbtn-text')
  ) {
    const myDropdown = document.getElementById('mob-myDropdown');
    const iconDrop = document.getElementById('mob-icon-drop');
    if (
      myDropdown.classList.contains('show') &
      iconDrop.classList.contains('revers')
    ) {
      myDropdown.classList.remove('show');
      iconDrop.classList.remove('revers');
    }
  }
};
