const VALORES = [2, 4, 2, 1, 5, 6, 2, 3, 3, 7, 8, 2];
let divResultado = document.getElementById("divResultado");

function media() {
    let total = 0;
    for (let pos = 0; pos < VALORES.length; pos++) {
        total = total + VALORES[pos];
        console.log(`posicion: ${pos}, elemento: ${VALORES[pos]}, TOTAL: ${total}`);
    }
    divResultado.innerHTML = `La media es ${total / VALORES.length}`;
}

function maximo() {
    let numMax = VALORES[0];
    for (let pos = 0; pos < VALORES.length; pos++) {
        if (VALORES[pos] > numMax) {
            numMax = VALORES[pos];
        }
    }
    divResultado.innerHTML = `El valor mas grande es ${numMax}`;
}

function minimo() {
    let numMinimo = VALORES[0];
    for (let pos = 0; pos < VALORES.length; pos++) {
        if (VALORES[pos] < numMinimo) {
            numMinimo = VALORES[pos];
        }
    }
    divResultado.innerHTML = `El valor minimo es ${numMinimo}`;
}
function pares() {
    let cuantos = 0;
    for (let pos = 0; pos < VALORES.length; pos++)
        if (VALORES[pos] % 2 == 0) {
            cuantos++;
        }
    divResultado.innerHTML = `Hay ${cuantos} numeros pares`;
}
