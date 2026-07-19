const laritmiaModal =
document.querySelector(".laritmia-modal");

const laritmiaTitle =
document.querySelector("#laritmia-title");

const laritmiaDescription =
document.querySelector("#laritmia-description");

function abrirLaritmia(personaje){

    laritmiaTitle.textContent =
        personaje.laritmia;

    laritmiaDescription.textContent =
        personaje.descripcionLaritmia;

    laritmiaModal.classList.add("active");

}

function cerrarLaritmia(){

    laritmiaModal.classList.remove("active");

}

document
.querySelector(".laritmia-close")
.addEventListener("click",cerrarLaritmia);