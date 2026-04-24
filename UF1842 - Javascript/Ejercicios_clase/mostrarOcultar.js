function mostrarOcultar() {
    let parrafoOculto = document.getElementById("parrafoOculto");
    let boton = document.getElementById("boton");

    if (boton.value == "Mostrar") {
        parrafoOculto.className = "visible";
        boton.value = "Ocultar"
    }
    else {
        parrafoOculto.className = "oculto"
        boton.value = "Mostrar"
    }

}