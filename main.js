const abrirMenu = document.querySelector(".abrirMenu");
const menu = document.querySelector("#menu");

function openMenu() {
  abrirMenu.classList.toggle("opened");
  menu.style.maxHeight = abrirMenu.classList.contains("opened") ? "50rem" : 0;
  menu.style.zIndex = abrirMenu.classList.contains("opened") ? "10" : 0;
}

abrirMenu.addEventListener("click", openMenu);
