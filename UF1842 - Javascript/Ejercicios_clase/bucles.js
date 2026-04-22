function imprimir() {
    let cajaNumero = document.getElementById("numero");
    let divResultado = document.getElementById("divResultado");
    let contador = 1;
    let texto = "";
    //divResultado.innerHTML = "";
    while (contador <= cajaNumero.value) {
        texto = texto + contador + "Hola Mundo<br>";
        //divResultado.innerHTML = divResultado.innerHTML + "Hola Mundo<br>";
        //divResultado.innerHTML +="Hola Mundo<br>";
        contador = contador + 1;
        //contador += 1;
    }
    divResultado.innerHTML = texto;
}

function imprimir() {
    let cajaNumero = document.getElementById("multiplicar");
    let divResultado = document.getElementById("resultadoMultiplicacion");
    let numero = cajaNumero.value;
    let contador = 1;
    let textoFinal = "";
    while (contador <= 10) {
        let resultado = numero * contador;
        textoFinal = textoFinal + numero + " x " + contador + " = " + resultado + "<br>";
        contador = contador + 1;
    }
    divResultado.innerHTML = textoFinal;
}