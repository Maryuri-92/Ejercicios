let cajaTexto = document.getElementById("txtFrase");
let divResultado = document.getElementById("divResultado");

function quitarVocales() {
    let resultado = "";
    for (let letra of cajaTexto.value) {
        if (letra != "a" && letra != "e" && letra != "i" && letra != "o" && letra != "u") {
            resultado = resultado + letra;
        }
    }
    divResultado.innerHTML = resultado;
}

function quitarVocales2() {
    divResultado.innerHTML = "";
    for (let letra of cajaTexto.value) {
        if (letra != "a" && letra != "e" && letra != "i" && letra != "o" && letra != "u") {
            divResultado.insertAdjacentHTML("beforeend", letra);
        }
    }
}

function quitarVocales3() {
    let resultado = cajaTexto.value.replaceAll("a", "");
    resultado = resultado.replaceAll("e", "");
    resultado = resultado.replaceAll("i", "");
    resultado = resultado.replaceAll("o", "");
    resultado = resultado.replaceAll("u", "");
    divResultado.innerHTML = resultado;
}

function alternarMayusculas() {
    let resultado = "";
    let numLetras = 0;
    for (let pos = 0; pos < cajaTexto.value.length; pos++) {
        if (cajaTexto.value.charAt(pos) != " ") {
            numLetras++;
            if (numLetras % 2 == 0) {
                resultado = resultado + cajaTexto.value.charAt(pos).toUpperCase();
            } else {
                resultado = resultado + cajaTexto.value.charAt(pos).toLowerCase();
            }
        } else {
            resultado = resultado + cajaTexto.value.charAt(pos);
        }
        
    }
    divResultado.innerHTML = resultado;
}

function alternarMayusculas2() {
    let resultado = "";
    let numLetras = 0;
    for (let pos = 0; pos < cajaTexto.value.length; pos++) {
        if (cajaTexto.value.charAt(pos) != " ") {
            numLetras++;
        }
        if (numLetras % 2 == 0) {
            resultado = resultado + cajaTexto.value.charAt(pos).toUpperCase();
        } else {
            resultado = resultado + cajaTexto.value.charAt(pos).toLowerCase();
        }  
    }
    divResultado.innerHTML = resultado;
}

function alReves() {
    let resultado = "";
    for(let letra of cajaTexto.value) {
        resultado = letra + resultado;
    }
    divResultado.innerHTML = resultado;
}

function alReves2() {
    let resultado = "";
    for(let pos = cajaTexto.value.length-1; pos >= 0; pos--) {
        resultado = resultado + cajaTexto.value.charAt(pos);
    }
    divResultado.innerHTML = resultado;
}

function masLarga() {
    let listaPalabras = cajaTexto.value.split(" ");
    let maximoLetras = listaPalabras[0].length;
    for (let palabra of listaPalabras) {
        if (palabra.length > maximoLetras) {
            maximoLetras = palabra.length;
        }
    }
    divResultado.innerHTML = `La palabra más larga tiene ${maximoLetras} letras`;
}

function masLarga2() {
    let maximoLetras = 0;
    let longitudPalabra = 0;
    for (let letra of cajaTexto.value) {
        if (letra != " ") {
            longitudPalabra++;
        } else {
            if (longitudPalabra > maximoLetras) {
                maximoLetras = longitudPalabra;
            }
            longitudPalabra = 0;
        }
    }
    if (longitudPalabra > maximoLetras) {
        maximoLetras = longitudPalabra;
    }
    divResultado.innerHTML = `La palabra más larga tiene ${maximoLetras} letras`;
}

function cambiarTodas() {
    let textoViejo = document.getElementById("txtViejo").value;
    let textoNuevo = document.getElementById("txtNuevo").value;

    let resultado = "";

    for (let letra of cajaTexto.value) {
        if (letra == textoViejo) {
            resultado = resultado + textoNuevo;
        } else {
            resultado = resultado + letra;
        }
    }
    divResultado.innerHTML = resultado;
}