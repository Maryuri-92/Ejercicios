
let caja = document.getElementById("cajaUsuario");
let resultado = document.getElementById("mostrarNum");
let adivinar;
let intentos = 0;


function numeros() {
    adivinar = Math.floor(Math.random() * 50) + 1;
    console.log(adivinar)

}
function comprobar() {
    if (intentos < 3) {
        if (caja.value == adivinar) {
            resultado.innerHTML = `Si es, El numero`;
        } else if (caja.value > adivinar) {
            resultado.innerHTML = `No es, El numero es menor`;
        } else {
            resultado.innerHTML = `No es, El numero es mayor`;
        }
    } else {
        resultado.innerHTML = `No Tienes mas intentos`;
    }
    intentos++;
}