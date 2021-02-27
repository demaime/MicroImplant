const hamburguer = document.querySelector(".hamburguer");
const abrirMenu = document.querySelector(".abrirMenu");
const cerrarMenu = document.querySelector(".cerrarMenu");
const menu = document.querySelector("#menu");
const productoColumna = document.querySelector("#producto-columna");
const listaColumna = document.querySelector("#lista-columna");

function openMenu() {
  abrirMenu.classList.toggle("opened");
  menu.style.maxHeight = abrirMenu.classList.contains("opened") ? "50rem" : 0;
}
function menuColumna() {
  productoColumna.classList.toggle("opened");
  listaColumna.style.maxHeight = productoColumna.classList.contains("opened")
    ? "50rem"
    : 0;
}
productoColumna.addEventListener("click", menuColumna);
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
