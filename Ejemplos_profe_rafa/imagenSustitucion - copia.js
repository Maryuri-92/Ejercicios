/*********** USANDO DOS FUNCIONES *************/
let elementoImg1 = document.getElementById("imagen1");

function verSegundaImagen() {
/*     console.log(`Elemento: ${elementoImg}`);
    console.log(`SRC: ${elementoImg.src}`);
    console.log(`ALT: ${elementoImg.alt}`);
    console.log(`ID: ${elementoImg.id}`); */
    elementoImg1.src = "imagenes/segunda.png";
    elementoImg1.alt = "Luna blanca";
}

function verPrimeraImagen() {
    elementoImg1.src = "imagenes/primera.png";
    elementoImg1.alt = "Luna amarilla";
}

/*********** USANDO UNA FUNCIÓN ************/

let elementoImg2 = document.getElementById("imagen2");

function cambiarImagen(saliendo) {
    if (saliendo) { // if (saliendo == true)
        elementoImg2.src = "imagenes/primera.png";
        elementoImg2.alt = "Luna amarilla";
    } else {
        elementoImg2.src = "imagenes/segunda.png";
        elementoImg2.alt = "Luna blanca";
    }
}