

const MODAL_BTN = document.querySelector(".btn-modal");
const MODAL_MAP = document.querySelector(".modal-map");

if (MODAL_BTN) {
  MODAL_BTN.addEventListener('click', () => {
  MODAL_MAP.classList.toggle('active');
  });
}