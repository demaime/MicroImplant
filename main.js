const hamburguer = document.querySelector(".hamburguer");
const abrirMenu = document.querySelector(".abrirMenu");
const cerrarMenu = document.querySelector(".cerrarMenu");
const menu = document.querySelector("#menu");

function openMenu() {
  if (menu.classList.contains("max-h-0")) {
    abrirMenu.classList.add("max-h-0");
    abrirMenu.classList.add("overflow-hidden");
    menu.style.maxHeight = 50 + "rem";
  }
}

function closeMenu() {
  menu.classList.add("overflow-hidden");
  menu.style.maxHeight = 0;
  abrirMenu.classList.remove("max-h-0");
  abrirMenu.classList.remove("overflow-hidden");
}

abrirMenu.addEventListener("click", openMenu);
cerrarMenu.addEventListener("click", closeMenu);

function cambiarPalabras() {
  const palabrasFoto = [
    "Excelencia",
    "Calidez",
    "Servicio 24hs",
    "Adaptabilidad",
    "Flexibilidad",
    "Calidad",
  ];
  const contenedorPalabras = document.getElementById(
    "contenedor-palabras-foto"
  );
  const display = (x) => (contenedorPalabras.innerText = x);

  // function delayLoop(fn, delay) {
  //   return (x, i) => {
  //     setTimeout(() => {
  //       fn(x);
  //     }, i * delay);
  //   };
  // }

  // palabrasFoto.forEach(delayLoop(display, 4000));

  let i = 0;
  setInterval(() => {
    const current = palabrasFoto[i];
    if (i < palabrasFoto.length) {
      display(current);
      i++;
    } else {
      i = 0;
    }
  }, 4000);
}

cambiarPalabras();
