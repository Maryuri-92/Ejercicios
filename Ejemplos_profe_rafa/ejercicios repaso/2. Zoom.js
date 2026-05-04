function zoom() {
    let imagen = document.getElementById("imagenPerro");
    let rango = document.getElementById("rngZoom");
    imagen.style.width = `${rango.value}px`;
}