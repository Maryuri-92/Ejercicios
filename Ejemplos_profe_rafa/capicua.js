function capicua() {
    let cajaNumero = document.getElementById("txtNumero");
    let divResultado = document.getElementById("divResultado");

    let digitos = [];

    //POR CARACTERES
    for(let digito of cajaNumero.value) {
        //console.log(digito);
        digitos.push(digito);
    }
    //console.log(digitos.toString())
    digitos.reverse();
    let alReves = digitos.join("");
    //console.log(alReves)
    if (cajaNumero.value == alReves) {
        divResultado.innerHTML = "ES CAPICUA";
    } else {
        divResultado.innerHTML = "NO ES CAPICUA";
    }

    // MATEMATICAMENTE
    /* let numero = parseInt(cajaNumero.value);
    while (numero > 0) {
        let resto = numero % 10;
        console.log(resto)
        numero = Math.floor(numero / 10);
    } */
}