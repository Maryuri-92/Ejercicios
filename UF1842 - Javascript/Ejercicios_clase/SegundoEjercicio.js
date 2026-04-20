function saludar() {
    let cajaNombreUsuario = document.getElementById("nombreusuario");
    let nombre = cajaNombreUsuario.value;
    let cajaRespuesta = document.getElementById("respuesta");
    cajaRespuesta.value = "Hola " + nombre;
}

/*function saludar() {
 let cajaNombreUsuario = document.getElementById("nombreusuario");
 let cajaRespuesta = document.getElementById("respuesta");
 cajaRespuesta.value = "Hola " + cajaNombre.value;
}*/

/* function saludar() {
document.getElementById("nombreusuario").value = "Hola " + document.getElementById("respuesta").value;
}*/

function rango() {
    let medir = document.getElementById("rangoMedida");
    let resultadoRango = document.getElementById("Medidas");
    resultadoRango.value = medir.value
    resultadoRango.style.backgroundColor = "yellow"
    resultadoRango.style.textAlign = "center"

}

