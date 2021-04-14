function actualizarMedidas (elemento, arrMedidas) {
  elemento.innerHTML = arrMedidas.map(medida => {
    const items = medida.tamano.map(tamano => `<li>${tamano}</li>`).join('')
    return `
      <div class="mb-4">
        <p>${medida.titulo}</p>
        <ul class="ml-2">${items}</ul>
      </div>
    `
  }).join('')
}

function menuColumna(containerProducto, contenedorLista) {
  containerProducto.classList.toggle("opened");
  contenedorLista.style.maxHeight = contenedorProductoActual.classList.contains(
    "opened"
  )
    ? "50rem"
    : 0;
  contenedorLista.style.zIndex = contenedorProductoActual.classList.contains("opened")
    ? "100"
    : 0;
}