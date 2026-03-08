const modal = document.querySelector(".modal");
const openModalBtn = document.querySelector("#btn-get");
const closeModalBtn = document.querySelector(".modal_close");
const openModal = () => {
  modal.style.display = "block";
};
const closeModal = () => {
  modal.style.display = "none";
};
openModalBtn.onclick = openModal;
closeModalBtn.onclick = closeModal;
modal.onclick = (event) => {
  if (event.target === modal) {
    closeModal();
  }
};
const openModalOnScroll = () => {
  if (
    window.innerHeight + window.scrollY >=
    document.documentElement.scrollHeight - 1
  ) {
    openModal();
    window.removeEventListener("scroll", openModalOnScroll);
  }
};
window.addEventListener("scroll", openModalOnScroll);

setInterval(openModal, 10000)