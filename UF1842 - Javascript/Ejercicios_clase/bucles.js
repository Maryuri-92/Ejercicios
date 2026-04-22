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
