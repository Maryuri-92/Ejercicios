let textoUsusario = document.getElementById("texto");
let resultado = document.getElementById("resultado");

function quitarVocales() {
    let frase = "";
    for (let letra of textoUsusario.value) {
        if (letra != "a" && letra != "e" && letra != "i" && letra != "o" && letra != "u") {
            frase = frase + letra
        }
        resultado.innerHTML = frase;
    }
}

function sumarVocales() {
    let contadorVocales = 0;
    for (let letra of textoUsusario.value) {
        if (letra == "a" || letra == "e" || letra == "i" || letra == "o" || letra == "u") {
            contadorVocales++;
        }
        resultado.innerHTML = `Hay: ${contadorVocales} vocales`;
    }
}

function alternarM() {
    let palabra = "";
    let numLetras = 0;
    for (let pos = 0; pos < textoUsusario.value.length; pos++) {
        if (textoUsusario.value.charAt(pos) != " ") {
            numLetras++;
        }
        if (numLetras % 2 == 0) {
            palabra = palabra + textoUsusario.value.charAt(pos).toUpperCase();
        } else {
            palabra = palabra + textoUsusario.value.charAt(pos).toLowerCase();
        }
    }
    resultado.innerHTML = palabra;
}


function alreves() {
    let resultadoletrasAl = "";
    for (let palabraAl of textoUsusario.value) {
        resultadoletrasAl = palabraAl + resultadoletrasAl;
    }
    resultado.innerHTML = resultadoletrasAl;
}

function palabralarga() {
    let txtLargo = textoUsusario.value.split(" ");
    let maxLetras = txtLargo[0].length;
    for (let tamañoPalabra of txtLargo) {
        if (tamañoPalabra.length > maxLetras) {
            maxLetras = tamañoPalabra.length
        }
    }
    resultado.innerHTML = `La palabra mas larga tiene ${maxLetras} letra`;
}

function cambiar() {
    let textoV = document.getElementById("textoViejo").value;
    let textoN = document.getElementById("textoNuevo").value;
    let resultadoNuevo = "";
    for (let cambio of textoUsusario.value)
        if (cambio == textoV) {
            resultadoNuevo = resultadoNuevo + textoN;
        } else {
            resultadoNuevo = resultadoNuevo + cambio;
        }
    resultado.innerHTML = resultadoNuevo;
}

