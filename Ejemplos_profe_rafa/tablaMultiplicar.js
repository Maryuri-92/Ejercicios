function imprimirTablaMultiplicar() {
    let cajaNumero = document.getElementById("txtNumero");
    let divResultado = document.getElementById("divResultado");

    let contador = 1;
    let resultado = "<ul>";
    while(contador <= 10) { //El bucle se tiene que ejecutar 10 veces
        //resultado = resultado + "<li>" + cajaNumero.value + " x " + contador + " = " + (cajaNumero.value * contador) + "</li>";

        //resultado = resultado + `<li>${} x ${} = ${}</li>`;

        resultado = resultado + `<li>${cajaNumero.value} x ${contador} = ${cajaNumero.value * contador}</li>`;

        contador = contador + 1;
    }
    resultado = resultado + "</ul>";
    divResultado.innerHTML = resultado;

}