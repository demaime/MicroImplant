const hamburguer = document.querySelector(".hamburguer");
const abrirMenu = document.querySelector(".abrirMenu");
const cerrarMenu = document.querySelector(".cerrarMenu");
const menu = document.querySelector("#menu");

function openMenu() {
  abrirMenu.classList.toggle("opened");
  menu.style.maxHeight = abrirMenu.classList.contains("opened") ? "50rem" : 0;
  if (abrirMenu.classList.contains("opened")) {
    document.body.addEventListener("click", closeMenu);
  }

  function closeMenu() {
    console.log("holi");
    // menu.classList.add("overflow-hidden");
    // menu.style.maxHeight = 0;
    // abrirMenu.classList.toggle("opened");
  }
}

abrirMenu.addEventListener("click", openMenu);

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
