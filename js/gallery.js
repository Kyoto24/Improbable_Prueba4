const galleryPanel = document.querySelector(".gallery-panel");

function abrirGaleria(){

    cargarGaleria();

    galleryPanel.classList.add("active");

}

function cerrarGaleria(){

    galleryPanel.classList.remove("active");

}

const galleryBackButton = document.querySelector(".gallery-back-button");

galleryBackButton.addEventListener("click", () => {

    volverAlMenu();

});



const galleryGrid = document.querySelector(".gallery-grid");

function cargarGaleria(){

    galleryGrid.innerHTML = "";

    galleryImages.forEach(imagen=>{

        galleryGrid.innerHTML += `

        <div class="art-card">

            <img
    src="${imagen.imagen}"
    onclick="abrirImagen('${imagen.imagen}')">

            <div class="art-info">

                <h3>${imagen.titulo}</h3>

                <p>${imagen.artista}</p>

            </div>

        </div>

        `;

    });

}

const viewer=document.querySelector(".image-viewer");

const viewerImage=document.querySelector(".viewer-image");

function abrirImagen(src){

    viewerImage.src=src;

    viewer.classList.add("active");

}

function cerrarImagen(){

    viewer.classList.remove("active");

}

viewer.addEventListener("click",cerrarImagen);