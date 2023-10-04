const dropbtn = document.querySelector('.mob-dropbtn');
// const iconDrop = document.querySelector('.mob-menu-icon-drop');
// const iconUp = document.querySelector('.mob-menu-icon-up');

dropbtn.addEventListener('click', myFunction);
function myFunction(e) {
  if (e.currentTarget.nodeName === 'BUTTON')
    document.getElementById('mob-myDropdown').classList.toggle('show');
  const contactLink = document.querySelector('.mobile-item.contact');
  contactLink.classList.toggle('show');
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
dropbtn.addEventListener('click', e => {
  if (
    !e.target.matches('.mob-dropbtn') &
    !e.target.matches('.mob-menu-icon-drop') &
    !e.target.matches('.mob-dropbtn-text')
  ) {
    const iconDrop = document.getElementById('mob-icon-drop');
    const iconUp = document.getElementById('mob-icon-up');

    iconDrop.classList.add('is-hidden');
    iconUp.classList.remove('is-hidden');
  }
});
