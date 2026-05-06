let img = document.getElementById("lagoCalima");
let ancho = 400;
const ANCHO_MINIMO = 100;

img.addEventListener("wheel", (eventoRueda) => {
    //console.log(`DeltaY: ${eventoRueda.deltaY}. DeltaMode: ${eventoRueda.deltaMode}`);
    //console.log(img.style.width)
    eventoRueda.preventDefault(); //aborto el comportamiento por defecto, que ene este caso es hacer scroll
    // para reducir la velocidad del zoom a la cuarta parte
    if (ancho + eventoRueda.deltaY / 4 >= ANCHO_MINIMO) {// para evitar que sea tan pequeña que no se vea
        ancho = ancho + eventoRueda.deltaY / 4; // para reducir la velocidad del zoom a la cuarta parte
        img.style.width = `${ancho}px`;
    }

});