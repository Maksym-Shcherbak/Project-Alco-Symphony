export class DrinkifyModal {
  constructor() {
    this.isModalOpen = false;
    this.modals = ['data-first-modal'];
  }

  selectOpenModalButton() {
    this.modals.forEach(element => {
      const openModalSelector = element + '-open';
      const openModalBtns = document.querySelectorAll(`[${openModalSelector}]`);
      const modal = document.querySelector(`[${element}]`);
      this.toggleModal(openModalBtns, modal);
    });
  }

  selectCloseModalButton() {
    this.modals.forEach(element => {
      const closeModalSelector = element + '-close';
      const closeModalBtns = document.querySelectorAll(
        `[${closeModalSelector}]`
      );
      const modal = document.querySelector(`[${element}]`);
      this.toggleModal(closeModalBtns, modal);
    });
  }

  toggleModal(buttons, modal) {
    buttons.forEach(button =>
      button.addEventListener('click', () => {
        document.body.classList.toggle('modal-open');
        modal.classList.toggle('is-hidden');
        console.log('what da fuck');
        if (!this.isModalOpen) {
          this.isModalOpen = true;
        } else {
          this.isModalOpen = false;
        }
      })
    );
  }
}
