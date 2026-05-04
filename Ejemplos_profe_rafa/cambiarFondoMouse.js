let colorFondo = 0;

let cuerpo = document.querySelector("body"); cuerpo.addEventListener("wheel", (eventoRueda) => {
    let color = colorFondo + eventoRueda.deltaY
    if (color >= 0 && color <= (255 * 255 * 255)) {

    }


});