let imagen = document.getElementById("imagen");
let ancho = 400;
const ANCHO_MINIMO = 100;

imagen.addEventListener("wheel", (eventoRueda) => {
    /* console.log(`DeltaY: ${eventoRueda.deltaY}. DeltaMode: ${eventoRueda.deltaMode}`);
    console.log(imagen.style.width) */
    eventoRueda.preventDefault(); //aborto el comportamiento por defecto, que en este caso es hacer scroll
    if (ancho + eventoRueda.deltaY / 4 >= ANCHO_MINIMO) { //para evitar que sea tan pequeña que no se vea
        ancho = ancho + eventoRueda.deltaY / 4; //para reducir la velocidad del zoom a la cuarta parte
        imagen.style.width = `${ancho}px`;
    }
});