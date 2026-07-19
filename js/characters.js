const charactersPanel = document.querySelector(".characters-panel");

function abrirPersonajes(){

    charactersPanel.classList.add("active");

}

function cerrarPersonajes(){

    charactersPanel.classList.remove("active");

}

const charactersBackButton =
document.querySelector(".characters-back-button");

charactersBackButton.addEventListener("click", volverAlMenu);

const characterZones =
document.querySelectorAll(".character-zone");

characterZones.forEach(zona=>{

    zona.addEventListener("click",()=>{

        abrirCategoria(zona);

    });

});

function abrirCategoria(zona){

    cerrarPersonajes();

    abrirListaPersonajes(

        zona.dataset.category

    );

}