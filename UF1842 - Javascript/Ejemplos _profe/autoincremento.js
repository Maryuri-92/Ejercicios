let cajaNumero = document.getElementById("txtNumero");
let divResultado = document.getElementById("divResultado");

function incrementoDelante() {
    divResultado.innerHTML = `++valor = ${++cajaNumero.value}`;
}

function incrementoDetras() {
    divResultado.innerHTML = `valor++ = ${cajaNumero.value++}`;
}

function decrementoDelante() {
    divResultado.innerHTML = `--valor = ${--cajaNumero.value}`;
}

function decrementoDetras() {
    divResultado.innerHTML = `valor-- = ${cajaNumero.value--}`;
}