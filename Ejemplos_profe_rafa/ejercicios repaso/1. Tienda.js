function activarProducto(idCajaTexto, casillaSeleccion) {
    let cajaTexto = document.getElementById(idCajaTexto);
    if (casillaSeleccion.checked) { //if (casillaSeleccion.checked == true)
        cajaTexto.disabled = false;
    } else {
        cajaTexto.disabled = true;
    }
    //cajaTexto.disabled = !casillaSeleccion.checked; //Asignar al disabled lo contrario que el checked
}

function calcularTotal() {
    let cajasTexto = document.querySelectorAll("input[type='number']");
    let casillas = document.querySelectorAll("input[type='checkbox']");
    let total = 0;
    for (let pos = 0; pos < cajasTexto.length; pos++) {
        let cajaTexto = cajasTexto[pos];
        let casilla = casillas[pos];
        if (!cajaTexto.disabled) { //if (cajaTexto.disabled == false)
            total = total + (parseFloat(cajaTexto.value)*parseFloat(casilla.value));
        }
    }
    document.getElementById("divResultado").innerHTML = total;
}
