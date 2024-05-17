var modal = document.getElementById("miModal");

// Obtener la imagen y colocarla dentro del modal
var modalImg = document.getElementById("img01");

function abrirModal(src) {
  modal.style.display = "block";
  modalImg.src = src;
}

function cerrarModal() {
  modal.style.display = "none";
}