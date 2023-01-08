function openAllCategory() {
  const icon = document.querySelector(".category-head--icon");
  const open = document.getElementsByClassName("open");
  const categoryBody = document.querySelector(".category-body");
  console.log(categoryBody);
  if (open.length > 0) {
    icon.classList.remove("open");
    categoryBody.classList.remove("active");
  } else {
    icon.classList.add("open");
    categoryBody.classList.add("active");
  }
}

const elementModal = document.querySelector(".modal");

function handleOpenModal() {
  elementModal.classList.add("open");
}
function handleCloseModal() {
  elementModal.classList.remove("open");
}
