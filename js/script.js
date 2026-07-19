const mainScreen = document.querySelector(".main-screen");

function cambiarAlModoNoche(){

    mainScreen.classList.add("night-mode");

}

function cambiarAlModoAtardecer(){

    mainScreen.classList.remove("night-mode");

}
window.addEventListener("load", () => {

    mostrarMensajeAleatorio();

});
   
function volverAlMenu(){

    // 1. Ocultar el panel actual

    cerrarPanel();

    cerrarGaleria();

    cerrarPersonajes();

    cerrarListaPersonajes();

    // 2. Esperar un poco antes de cambiar el fondo

    setTimeout(()=>{

        cambiarAlModoAtardecer();

    },250);

    // 3. Esperar un poco más antes de mostrar el menú

    setTimeout(()=>{

        restaurarMenu();

    },850);

}

       