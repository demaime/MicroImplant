function actualizarMedidas(elemento, arrMedidas) {
  elemento.innerHTML = arrMedidas
    .map((medida) => {
      const items = medida.tamano
        .map((tamano) => `<li>${tamano}</li>`)
        .join("");
      return `
      <div class="mb-4">
        <p>${medida.titulo}</p>
        <ul class="ml-2">${items}</ul>
      </div>
    `;
    })
    .join("");
}

function menuColumna(contenedorLista) {
  contenedorLista.classList.toggle("opened");
  contenedorLista.style.maxHeight = contenedorLista.classList.contains("opened")
    ? "50rem"
    : 0;
  contenedorLista.style.zIndex = contenedorLista.classList.contains("opened")
    ? "100"
    : 0;
}

function selectItem(
  productId,
  nombreElem,
  descripcionElem,
  imagenElem,

  listaColumna,
  medidasContainer,
  inicializando
) {
  const productClicked = productos.find((product) => product.id === productId);
  nombreElem.innerText = productClicked.nombre;
  descripcionElem.innerText = productClicked.descripcion;

  actualizarMedidas(medidasContainer, productClicked.medidas);

  let imgHtml = "";
  const classesByIndex = ["uno", "dos", "tres"];
  productClicked.imagenes.forEach((imagen, i) => {
    imgHtml += `
      <div 
        class="${classesByIndex[i]} opacity-${
      i === 0 ? "1" : "0"
    } w-full h-96 justify-center items-center flex absolute p-2"
      >
        <img
          class="max-w-full max-h-full"
          src="../assets/${imagen}"
          alt=""
        />
      </div>
    `;
  });

  imagenElem.innerHTML = imgHtml;
  if (!inicializando) menuColumna(listaColumna);
}

function showImage(elem, butSelector) {
  const imagenArr = Array.from(document.querySelectorAll("#img-container div"));
  butSelector.forEach((butImg) => {
    if (elem.dataset.image === butImg.dataset.image) {
      butImg.classList.add("bg-primary-dark");
      butImg.classList.remove("bg-gray-400");
    } else {
      butImg.classList.remove("bg-primary-dark");
      butImg.classList.add("bg-gray-400");
    }
  });
  imagenArr.forEach((foto) => {
    if (foto.classList.contains(elem.dataset.image)) {
      foto.classList.add("opacity-1");
      foto.classList.remove("opacity-0");
    } else {
      foto.classList.add("opacity-0");
      foto.classList.remove("opacity-1");
    }
  });
}

function closeMenu(menu, productoActual) {
  document.addEventListener("click", function (e) {
    if (
      menu.classList.contains("opened") &&
      !menu.contains(e.target) &&
      productoActual !== e.target
    ) {
      menu.classList.remove("opened");
      menu.style.maxHeight = 0;
      menu.style.zIndex = 0;
    }
  });
}

function init(
  categoria,
  contenedorProductoActual,
  menuDeProductos,
  productoActual,
  imgcontainer,
  slider,
  description,
  medidasContainer
) {
  const productosCategoria = productos.filter(
    (producto) => producto.categoria === categoria
  );
  const productoInicial = productosCategoria[0];
  productoActual.innerText = productoInicial.nombre;
  description.innerText = productoInicial.descripcion;
  actualizarMedidas(medidasContainer, productoInicial.medidas);

  productosCategoria.forEach((producto) => {
    if (producto.categoria === categoria) {
      const li = document.createElement("li");
      li.classList =
        "bg-blue-50 border-t border-blue-300 py-1 font-bold tracking-wide duration-150";
      li.onmouseover = function () {
        this.style.cursor = "pointer";
        this.style.transform = "scale(1.1)";
      };
      li.onmouseleave = function () {
        this.style.transform = "scale(1)";
      };
      li["data"] = producto.id;
      li.innerText = producto.nombre;
      menuDeProductos.appendChild(li);
    }
  });
  const itemsDeLaLista = Array.from(
    document.querySelectorAll("#menu-productos li")
  );
  contenedorProductoActual.addEventListener("click", function () {
    menuColumna(menuDeProductos);
  });
  itemsDeLaLista.forEach((item) =>
    item.addEventListener("click", (e) =>
      selectItem(
        e.target.data,
        productoActual,
        description,
        imgcontainer,
        menuDeProductos,
        medidasContainer
      )
    )
  );
  selectItem(
    productoInicial.id,
    productoActual,
    description,
    imgcontainer,
    menuDeProductos,
    medidasContainer,
    true
  );
  slider.forEach((item) =>
    item.addEventListener("click", (e) => showImage(e.target, slider))
  );
  closeMenu(menuDeProductos, productoActual);
}
