let caja1 = document.getElementById("numero1")/*aqui va el id""*//*va entre ""*/
let caja2 = document.getElementById("numero2")
let cajaresultado = document.getElementById("resultado1")
function sumar() {

    let numero1 = parseFloat(caja1.value);
    //alert(numero1);

    let caja2 = document.getElementById("numero2")
    let numero2 = parseInt(caja2.value);
    //alert(numero2);

    let resultado = numero1 + numero2;

    cajaresultado.value = resultado.toFixed(2);
}
function restar() {
    let caja1 = document.getElementById("numero1")/*aqui va el id""*//*va entre ""*/
    let numero1 = parseFloat(caja1.value);
    //alert(numero1);


    let numero2 = parseInt(caja2.value);
    //alert(numero2);

    let resultado = numero1 - numero2;
    let cajaresultado = document.getElementById("resultado1")
    cajaresultado.value = resultado;

}
function dividir() {
    let numero1 = parseFloat(caja1.value);
    //alert(numero1);

    let caja2 = document.getElementById("numero2")
    let numero2 = parseInt(caja2.value);
    //alert(numero2);

    let resultado = numero1 / numero2;

    cajaresultado.value = resultado.toFixed(2);

}
function multiplicar() {
    let numero1 = parseFloat(caja1.value);
    //alert(numero1);

    let caja2 = document.getElementById("numero2")
    let numero2 = parseInt(caja2.value);
    //alert(numero2);

    let resultado = numero1 * numero2;

    cajaresultado.value = resultado.toFixed(2);

}