let isModalOpen = false;
export function createModal() {
  const modals = ['data-first-modal'];
  if (!isModalOpen) {
    modals.forEach(element => {
      const openModalSelector = element + '-open';
      const openModalBtns = document.querySelectorAll(`[${openModalSelector}]`);
      const modal = document.querySelector(`[${element}]`);
      if (!modal) logModalError('Can`t find Modal with attribute ' + modal);
      if (openModalBtns.length === 0)
        logModalError(
          'Can`t find Open modal button with attribute ' + openModalSelector
        );
      toggleModal(openModalBtns, modal);
    });
  } else {
    modals.forEach(element => {
      const closeModalSelector = element + '-close';
      const closeModalBtns = document.querySelectorAll(
        `[${closeModalSelector}]`
      );
      const modal = document.querySelector(`[${element}]`);
      if (closeModalBtns.length === 0)
        logModalError(
          'Can`t find Close modal button with attribute ' + closeModalSelector
        );
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
}
