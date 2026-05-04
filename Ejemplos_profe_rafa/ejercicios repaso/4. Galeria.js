function cambiarColumnas() {
    let seleccion = document.getElementById("slcColumnas");
    let seccion = document.getElementById("seccionImagenes");
    if (seleccion.value == "2") {
        seccion.className = "dosColumnas";
    } else {
        if (seleccion.value == "3") {
            seccion.className = "tresColumnas";
        } else {
            seccion.className = "cuatroColumnas";
        }
    }
}

function cambiarColumnas2() {
    let seleccion = document.getElementById("slcColumnas");
    let seccion = document.getElementById("seccionImagenes");
   
    seccion.className = seleccion.value;

}

//seccion.style.gridTemplateColumns = `repeat(${seleccion.value}, 1fr)`;