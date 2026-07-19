/*==================================================

    IMPROBABLE
    Mensajes del menú principal

==================================================*/

const messages = [

    `"¿Te gu'tan lo' pate'lito?"`,

    `"¿Eduardo estará abierto hoy...?"`,

    `"Enserio... Saru es un nombre bacanisimo para una papita."`,

    `"Te apuesto a que no puedes decirme un mejor padre que Harold."`,

    `"El matchmaking de esta vaina no me gusta... Dijo una vez un Uber."`,

    `"¿Que te ha hecho la WASD...?."`,

    `"Raga e' un tiguere amistoso."`,

    `"¿¡Como que 1350 por un chimi!?"`,

    `"Seguro a McCrash se le olvidó."`,

    `"¡Yo no soy mata para comer tanta tierra!"`,

    `"Eso e' refrigeración, que no es lo mismo ni e' igual. Llegale."`,

    `"Me rehuso."`,

    `"😱 "`,

    `"¡Ahí te voy mi pan con mantequilla!"`,

    `"Dame banda."`,

    `"Si alante de tí tu tienes un pan con mantequilla, primero, deja de wele' porque aquí nunca hay mantequilla por alguna razón. Tampoco vayas a buscar dique jamón u otra vaina porque se lo comen. Cómetelo así, vacío, porque ajá."`

];

function mostrarMensajeAleatorio(){

    const paragraph = document.querySelector(".random-message");

    const randomIndex = Math.floor(Math.random() * messages.length);

    paragraph.textContent = messages[randomIndex];

}

const messageElement = document.querySelector(".random-message");

let currentMessage = 0;

function cambiarMensaje(){

    messageElement.classList.add("message-hidden");

    setTimeout(()=>{

        let randomIndex;

        do{

            randomIndex = Math.floor(Math.random() * messages.length);

        }while(randomIndex === currentMessage);

        currentMessage = randomIndex;

        messageElement.textContent = messages[currentMessage];

        messageElement.classList.remove("message-hidden");

    },600);

}

setInterval(cambiarMensaje,10000);