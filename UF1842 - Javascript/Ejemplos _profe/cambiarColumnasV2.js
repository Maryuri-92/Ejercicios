let contenedorImagenes = document.getElementById("imagenes");
let radio1 = document.getElementById("rdUnaColumna");
let radio2 = document.getElementById("rdDosColumnas");
//let radio3 = document.getElementById("rdTresColumnas");

function cambiarColumnas() {
    //if (radio1.checked == false) { //if (!radio1.checked) { //NO PERTENECE AL EJERCICIO
    if (radio1.checked == true) { //if (radio1.checked)
        contenedorImagenes.style.gridTemplateColumns = "1fr";
    } else {
        if (radio2.checked == true) {
            contenedorImagenes.style.gridTemplateColumns = "1fr 1fr";
        } else {
            contenedorImagenes.style.gridTemplateColumns = "1fr 1fr 1fr";
        }
    }
}

