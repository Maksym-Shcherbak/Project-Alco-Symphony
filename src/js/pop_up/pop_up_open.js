let isModalOpen = false;
export function createModal() {
  console.log('i work');
  const modals = ['data-first-modal'];
  if (!isModalOpen) {
    modals.forEach(element => {
      const openModalSelector = element + '-open';
      const openModalBtns = document.querySelectorAll(`[${openModalSelector}]`);
      const modal = document.querySelector(`[${element}]`);
      console.log(openModalBtns);
      if (!modal) logModalError('Can`t find Modal with attribute ' + modal);
      if (openModalBtns.length === 0)
        logModalError(
          'Can`t find Open modal button with attribute ' + openModalSelector
        );
      // openModalBtns.forEach(openBtn =>
      //   openBtn.addEventListener('click', toggleModal)
      // );
      toggleModal(openModalBtns, modal);
      console.log(isModalOpen);
    });
  } else {
    console.log('why');
    modals.forEach(element => {
      const closeModalSelector = element + '-close';
      const closeModalBtns = document.querySelectorAll(
        `[${closeModalSelector}]`
      );
      console.log(closeModalBtns);
      console.log(element);
      const modal = document.querySelector(`[${element}]`);
      if (closeModalBtns.length === 0)
        logModalError(
          'Can`t find Close modal button with attribute ' + closeModalSelector
        );
      // closeModalBtns.forEach(closeBtn =>
      //   closeBtn.addEventListener('click', toggleModal)
      // );
      toggleModal(closeModalBtns, modal);
    });
  }
  function logModalError(text) {
    const styles = 'color: #bada55';
    console.log('%c' + text, styles);
  }
}

function toggleModal(buttons, modal) {
  buttons.forEach(button =>
    button.addEventListener('click', () => {
      document.body.classList.toggle('modal-open');
      modal.classList.toggle('is-hidden');
      if (!isModalOpen) {
        isModalOpen = true;
      }
    })
  );
  console.log(isModalOpen);
  console.log('what da fuck');
}
