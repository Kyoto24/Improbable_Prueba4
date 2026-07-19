/*==================================================

    IMPROBABLE
    Menú Principal

==================================================*/

const mainMenu = document.querySelector(".main-menu");

const menuButtons = document.querySelectorAll(".menu-button");

menuButtons.forEach(button=>{

    button.addEventListener("click",()=>{

        iniciarTransicion(button);

    });

});

function activarBoton(botonSeleccionado){

    menuButtons.forEach(boton=>{

        if(boton===botonSeleccionado){

            boton.classList.add("active");

        }else{

            boton.classList.add("hide");

        }

    });

    setTimeout(()=>{

    mainMenu.style.display = "none";

},1500);

}