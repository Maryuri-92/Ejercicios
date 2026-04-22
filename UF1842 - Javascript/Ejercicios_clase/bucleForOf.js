const listaPalabras = ["hola", "adios", "cerca", "lejos", "arriba"];
const palabra = "Panoramix"
let divResultado = document.getElementById("divResultado");
function verlista() {
    let resultado = "<ol>";
    //for( let pos =0; pos < listaPalabras.length; pos++) {}
    for (let palabra of listaPalabras) {
        resultado = resultado + `<li>${palabra}</li>`;
    }
    resultado = resultado + "</ol>";
    divResultado.innerHTML = resultado;
}

function verletras() {
    let resultado = "<ol>";
    for (let letra of palabra) {
        resultado = resultado + `<li>${letra}</li>`;
    }
    resultado = resultado + "</ol>";
    divResultado.innerHTML = resultado;
} 
