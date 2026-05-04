let pantalla = document.getElementById("pantalla");
let primerNumero;
let operacion = "";
let borrarPantalla = false;

function pulsarNumero(numero) {
    if (pantalla.value == "0" || borrarPantalla) {
        pantalla.value = numero;
        borrarPantalla = false;
    } else {
        pantalla.value = pantalla.value + numero;
    }
    
}

function pulsarOperacion(simbolo) {
    operacion = simbolo;
    primerNumero = parseInt(pantalla.value);
    borrarPantalla = true;
    //console.log(`Primer número = ${primerNumero} y operación = ${operacion}`);
}

function pulsarIgual() {
    let segundoNumero = parseInt(pantalla.value);
    switch(operacion) {
        case "+": pantalla.value = primerNumero + segundoNumero;
            break;
        case "-": pantalla.value = primerNumero - segundoNumero;
            break;
        case "*": pantalla.value = primerNumero * segundoNumero;
            break;
        case "/": pantalla.value = primerNumero / segundoNumero;
    }
    borrarPantalla = true;
}

function pulsarCE() {
    pantalla.value = "0";
}

function pulsarC() {
    pantalla.value = "0";
    primerNumero = 0;
    operacion = "";
    //console.log(`Primer número = ${primerNumero} y operación = ${operacion}`);
}

function pulsarBorrarUltimo(){
    let resto = pantalla.value % 10;
    let valor = pantalla.value
     
}