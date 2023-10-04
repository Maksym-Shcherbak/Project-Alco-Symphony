export class DrinkifyModal {
  constructor() {
    this.isModalOpen = false;
    this.modal = ['data-first-modal'];
  }

  selectOpenModalButton() {
    this.modal.forEach(element => {
      const openModalSelector = element + '-open';
      const openModalBtns = document.querySelectorAll(`[${openModalSelector}]`);
      const modal = document.querySelector(`[${element}]`);
      this.toggleModal(openModalBtns, modal);
    });
  }

  selectCloseModalButton() {
    this.modal.forEach(element => {
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

        if (!this.isModalOpen) {
          this.isOpen = true;
          modal.addEventListener('click', this.closeOnBackdrop);
        }
      })
    );
  }

  closeOnBackdrop(event) {
    if (event.target.classList.contains('backdrop')) {
      event.target.classList.toggle('is-hidden');
      document.body.classList.toggle('modal-open');
      event.target.removeEventListener('click', this.closeOnBackdrop);
    }
  }

  get isOpen() {
    return this.isModalOpen;
  }

  set isOpen(newStage) {
    this.isModalOpen = newStage;
  }
}
