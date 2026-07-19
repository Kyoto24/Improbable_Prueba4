/*==================================================

    IMPROBABLE
    Transiciones

    Responsabilidad:
    Coordinar todas las animaciones del proyecto.

==================================================*/

function iniciarTransicion(botonSeleccionado){

    activarBoton(botonSeleccionado);

    setTimeout(() => {

        cambiarAlModoNoche();

    }, 250);

    setTimeout(() => {

    abrirSeccion(botonSeleccionado.dataset.panel);

}, 650);

    setTimeout(() => {

        botonSeleccionado.classList.add("hide");

    }, 1100);

    logo.classList.add("fade-out");
message.classList.add("fade-out");

}

function abrirSeccion(seccion){

    switch(seccion){

        case "power":
            abrirPanel();
            break;

        case "gallery":
            abrirGaleria();
            break;

        case "characters":
            abrirPersonajes();
            break;

    }

}

const logo = document.querySelector(".logo-container");
const message = document.querySelector(".message-container");

