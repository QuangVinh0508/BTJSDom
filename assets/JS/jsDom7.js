const $ = document.querySelector.bind(document);

const modal = $(".modal");
const openModal = $(".open__modal");
const iconCloseModal = $(".modal__header i");
const buttonCloseModal = $(".modal__footer button");

function toggleModal() {
  modal.classList.toggle("hide");
}

openModal.addEventListener("click", toggleModal);
iconCloseModal.addEventListener("click", toggleModal);
buttonCloseModal.addEventListener("click", toggleModal);

modal.addEventListener("click", (e) => {
  if (e.target == e.currentTarget) toggleModal();
});
