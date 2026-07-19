let categoriaActual = "";

const characterGrid =
document.querySelector(".character-grid");

const characterListPanel =
document.querySelector(".character-list-panel");

const categoryTitle =
document.querySelector("#character-category-title");

function abrirListaPersonajes(categoria){

    categoriaActual = categoria;

    const titulos = {

        principales: "Principales",
        casas: "Casas",
        villanos: "Villanos"

    };

    categoryTitle.textContent = titulos[categoria];

    cargarPersonajes(categoria);

    characterListPanel.classList.add("active");

}

function cerrarListaPersonajes(){

    characterListPanel.classList.remove("active");

}

const listBackButton =
document.querySelector(".character-list-back");

listBackButton.addEventListener("click",()=>{

    cerrarListaPersonajes();

    abrirPersonajes();

});

function cargarPersonajes(categoria){

    characterGrid.innerHTML = "";

    characterData[categoria].forEach(personaje=>{

        const card=document.createElement("div");

        card.className="character-card";

        card.innerHTML = `

            <div class="character-image-area">

                <img src="${personaje.imagen}">

            </div>

            <div class="character-name">

        <h3>${personaje.nombre}</h3>

    </div>

`;

        card.addEventListener("click",()=>{

    console.log("Click en:", personaje.nombre);

    cerrarListaPersonajes();

    abrirFicha(personaje);

});

        characterGrid.appendChild(card);

    });

}