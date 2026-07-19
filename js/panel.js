/*==================================================

    IMPROBABLE
    Panel

    Responsabilidad:
    Abrir y cerrar el Panel.

==================================================*/

const panel = document.querySelector(".panel");

function abrirPanel(){

    panel.classList.add("active");

}

function cerrarPanel(){

    panel.classList.remove("active");

}





const panelButtons = document.querySelectorAll(".panel-option");

const contentBox = document.querySelector(".content-box");

panelButtons.forEach(button=>{

    button.addEventListener("click",()=>{

        seleccionarApartado(button);

    });

});

function seleccionarApartado(button){

    activarApartado(button);

    mostrarContenido(button.dataset.topic);

}

function activarApartado(botonSeleccionado){

    panelButtons.forEach(button=>{

        button.classList.remove("active");

    });

    botonSeleccionado.classList.add("active");

}




function mostrarContenido(topic){

    const info = powerData[topic];

    contentBox.classList.add("content-hidden");

    setTimeout(()=>{

        contentBox.innerHTML=`

            <h2>${info.titulo}</h2>

            <p>${info.contenido}</p>

        `;

        contentBox.classList.remove("content-hidden");

    },250);

}

const backButton = document.querySelector(".back-button");

backButton.addEventListener("click", volverAlMenu);




function restaurarMenu(){

    mainMenu.style.display = "flex";
    
    // Comienzan ocultos
    logo.classList.add("fade-out");
    message.classList.add("fade-out");

    // Primero aparece el logo
    setTimeout(()=>{

        logo.classList.remove("fade-out");

    },150);

    // Luego la frase
    setTimeout(()=>{

        message.classList.remove("fade-out");

    },350);

    // Después los botones uno por uno
    menuButtons.forEach((button,index)=>{

        setTimeout(()=>{

            button.classList.remove("hide");
            button.classList.remove("active");

        },550 + index*120);

    });

}

