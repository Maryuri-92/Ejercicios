function calcular() {
    let cajaNumero1 = document.getElementById("txtNumero1");
    let cajaNumero2 = document.getElementById("txtNumero2");
    let operacion = document.getElementById("slcOperacion").value;
    let divResultado = document.getElementById("divResultado");

    let numero1 = parseInt(cajaNumero1.value);
    let numero2 = parseInt(cajaNumero2.value);

    let resultado;

    switch(operacion) {
        case "S": resultado = numero1 + numero2;
            break;
        case "R": resultado = numero1 - numero2;
            break;
        case "M": resultado = numero1 * numero2;
            break;
        case "D": resultado = numero1 / numero2;
            break;
    }
    divResultado.innerHTML = resultado.toFixed(2);
}