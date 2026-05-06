function calcularFactorial() {
    let cajaNumero = document.getElementById("txtNumero");
    let divResultado = document.getElementById("divResultado");

    let resultado = 1;
    let contador = cajaNumero.value;
    let texto = "";
    while(contador >= 1) {
        resultado = resultado * contador;
        if (contador > 1) {
            texto = texto + `${contador} x `;
        } else {
            texto = texto + `${contador}`;
        }
        //Lo último del bucle es modificar el contador
        contador = contador - 1;
    }
    divResultado.innerHTML = `El factorial de ${cajaNumero.value} es ${texto} = ${resultado}`;
}
 /*    for (let contador = cajaNumero.value; contador >= 1; contador--) {

    } */