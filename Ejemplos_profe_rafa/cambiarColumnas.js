let contenedorImagenes = document.getElementById("imagenes");

function unaColumna() {
    contenedorImagenes.style.gridTemplateColumns = "1fr";
}

function dosColumnas() {
    contenedorImagenes.style.gridTemplateColumns = "1fr 1fr";
}

function tresColumnas() {
    contenedorImagenes.style.gridTemplateColumns = "1fr 1fr 1fr";
}
