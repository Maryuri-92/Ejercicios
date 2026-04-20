
let cajaPrimerNumero = document.getElementById("txtPrimerNumero");
let cajaSegundoNumero = document.getElementById("txtSegundoNumero");
let cajaResultado = document.getElementById("txtResultado");

function sumar() {
    let primerNumero = parseFloat(cajaPrimerNumero.value);

    let segundoNumero = parseFloat(cajaSegundoNumero.value);

    let resultado = primerNumero + segundoNumero;
    cajaResultado.value = resultado.toFixed(2);
}

function restar() {
    let primerNumero = parseFloat(cajaPrimerNumero.value);

    let segundoNumero = parseFloat(cajaSegundoNumero.value);

    let resultado = primerNumero - segundoNumero;
    cajaResultado.value = resultado.toFixed(2);
}

function multiplicar() {
    let primerNumero = parseFloat(cajaPrimerNumero.value);

    let segundoNumero = parseFloat(cajaSegundoNumero.value);

    let resultado = primerNumero * segundoNumero;
    cajaResultado.value = resultado.toFixed(2);
}

function dividir() {
    let primerNumero = parseFloat(cajaPrimerNumero.value);

    let segundoNumero = parseFloat(cajaSegundoNumero.value);

    let resultado = primerNumero / segundoNumero;
    cajaResultado.value = resultado.toFixed(2);
}