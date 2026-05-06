let cajaTexto = document.getElementById("txtTexto");
let divResultado = document.getElementById("divResultado");


function metodo1() {
    divResultado.innerHTML = `la longitud del texto ${cajaTexto.value.length} `;
}

function metodo2() {
    divResultado.innerHTML = `El texto "la" empeiza en la posicion ${cajaTexto.value.indexOf("la")} `;
}

function metodo3() {
    divResultado.innerHTML = `El texto "la" empieza por ultima vez en la posicion ${cajaTexto.value.lastIndexOf("la")} `;
}

function metodo4() {
    divResultado.innerHTML = `El numero del DNI es ${cajaTexto.value.slice(0, 8)} `;
}

function metodo5() {
    divResultado.innerHTML = `La letra del DNI es ${cajaTexto.value.slice(8, 9)} `;
}

function metodo5_1() {
    divResultado.innerHTML = `La letra del NIE es ${cajaTexto.value.slice(1, 8)} `;
}

function metodo6() {
    divResultado.innerHTML = `La palabra de la posicion 5 a la 7 es: ${cajaTexto.value.substr(5, 3)} `;
}

function metodo7() {
    divResultado.innerHTML = `Cambia las primera a por la o ${cajaTexto.value.replace('a', 'o')} `;
}

function metodo8() {
    divResultado.innerHTML = `Cambia TODAS las a por las o ${cajaTexto.value.replaceAll('a', 'o')} `;
}

function metodo9() {
    divResultado.innerHTML = `Cambia TODAS las , por nada ${cajaTexto.value.replaceAll(',', '')} `;
}

function metodo10() {
    divResultado.innerHTML = `Borra los espacios redunadantes ${cajaTexto.value.trim()} `;
}

function metodo11() {
    divResultado.innerHTML = `Toma el caracter de la poscion 4 ${cajaTexto.value.charAt(4)} `;
}
function metodo12() {
    divResultado.innerHTML = `Corta la palabra por (-) y la cambia por (,) ${cajaTexto.value.split('-')} `;
}

function metodo13() {
    divResultado.innerHTML = `Corta la palabra por y la cambia a ${cajaTexto.value.split('')} `;
}