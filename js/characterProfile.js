const photoCard =
document.querySelector(".photo-card");

const profilePanel =
document.querySelector(".character-profile-panel");

let personajeActual = null;



photoCard.addEventListener("click",()=>{

    if(!personajeActual) return;

    photoCard.classList.toggle("flipped");

});




function abrirFicha(personaje){

    mostrarFicha(personaje);

    profilePanel.classList.add("active");

}

function cerrarFicha(){

    profilePanel.classList.remove("active");

    photoCard.classList.remove("flipped");
    
    personajeActual = null;

}

const profileBackButton =
document.querySelector(".character-profile-back");

profileBackButton.addEventListener("click",()=>{

    cerrarFicha();

    abrirListaPersonajes("principales");

});

profilePanel.addEventListener("click",(e)=>{

    if(e.target !== profilePanel) return;

    cerrarFicha();

    abrirListaPersonajes(categoriaActual);

});

function mostrarFicha(personaje){

    personajeActual = personaje;

    // Siempre empezar con la fotografía de frente
    photoCard.classList.remove("flipped");

    // Nombre principal
    document.querySelector("#profile-name").textContent =
        personaje.nombre;

    // Datos del expediente
    document.querySelector("#profile-realname").textContent =
        personaje.nombreReal;

    document.querySelector("#profile-birthday").textContent =
        personaje.fechaNacimiento;

    document.querySelector("#profile-age").textContent =
        personaje.edad;

    // Información adicional
    document.querySelector("#profile-phrase").textContent =
        personaje.frase;

    document.querySelector("#profile-text").textContent =
        personaje.descripcion;

    // Fotografía
    console.log(personaje.foto);
    console.log(document.querySelector("#profile-photo"));
    document.querySelector("#profile-photo").src =
        personaje.foto;

    document.querySelector("#photo-caption").textContent =
        personaje.nombre;

    document.querySelector("#memory-title").textContent =
    personaje.recuerdoTitulo || "Sin registros";

document.querySelector("#memory-content").innerHTML =
    personaje.recuerdoContenido ||
    "No se ha encontrado ningún documento personal.";

    document.querySelector("#memory-date").textContent =
    personaje.recuerdoFecha || "";

    document.querySelector("#memory-signature").textContent =
    personaje.recuerdoFirma || "";


        const boton =
document.querySelector("#profile-laritmia");

boton.textContent =
    personaje.laritmia;

boton.onclick = ()=>{

    abrirLaritmia(personaje);

};

const houseRow =
document.querySelector("#house-row");

const house =
document.querySelector("#profile-house");


if(personaje.casas){

    house.textContent = personaje.casas;

    houseRow.style.display = "flex";

}else{

    houseRow.style.display = "none";

}


}

