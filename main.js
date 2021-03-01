const hamburguer = document.querySelector(".hamburguer");
const abrirMenu = document.querySelector(".abrirMenu");
const cerrarMenu = document.querySelector(".cerrarMenu");
const menu = document.querySelector("#menu");

function openMenu() {
  abrirMenu.classList.toggle("opened");
  menu.style.maxHeight = abrirMenu.classList.contains("opened") ? "50rem" : 0;
}

abrirMenu.addEventListener("click", openMenu);

function cambiarPalabras() {
  const palabrasFoto = [
    "Calidad",
    "Excelencia",
    "Calidez",
    "Servicio 24hs",
    "Adaptabilidad",
    "Flexibilidad",
  ];
  const contenedorPalabras = document.getElementById(
    "contenedor-palabras-foto"
  );
  const display = (x) => (contenedorPalabras.innerText = x);
  let i = 0;
  setInterval(() => {
    const current = palabrasFoto[i];
    if (i <= palabrasFoto.length - 1) {
      display(current);
      i++;
    } else {
      i = 0;
    }
  }, 3000);
}

cambiarPalabras();
