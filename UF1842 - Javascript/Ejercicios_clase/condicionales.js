function esPar() {
    let cajaNumero = document.getElementById("txtNumero");
    let numero = parseInt(cajaNumero.value);
    let div = document.getElementById("divResultado")
    if (isNaN(numero) == false) { // if (!isNaN(numero)) {
        let resto = numero % 2;
        /*si el resto es cero 
        en el div pongo "Es par"
        si no en el div "es impar"*/
        if (resto == 0) {
            div.innerHTML = "El numero es Par"
        } else {
            div.innerHTML = "El numero es Impar"
        }
    }
    /*function esPositivo() {
        let cajaNumero = document.getElementById("txtNumero");
        let numero = parseInt(cajaNumero.value);
        let div = document.getElementById("divResultado")
        if (numero >= 0) {
            div.innerHTML = "Es positivo"
        } else {
            div.innerHTML = "Es negativo"
        }
    }*/
    function esPositivo() {
        let cajaNumero = document.getElementById("txtNumero");
        let numero = parseInt(cajaNumero.value);
        let div = document.getElementById("divResultado")
        if (numero == 0) {
            div.innerHTML = "El numero es CERO";
        } else if (numero > 0) {
            div.innerHTML = "El numero es POSITIVO";
        } else {
            div.innerHTML = "El numero es NEGATIVO";
        }
    }
}
function RangoColor() {
    let rango = document.getElementById("RangoColor")
    let fondo = document.getElementById("FondoCuerpo")
    fondo.value = rango.value
    if (fondo.value <= 25) {
    } else {

    }

}
}