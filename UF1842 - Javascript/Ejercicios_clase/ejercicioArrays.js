function capicua() {
    let textNumero = document.getElementById("textNumero");
    let resultado = document.getElementById("resultado")

    let arrayDigitos = [];
    //por caracteres
    for (let digito of textNumero.value) {
        //console.log(digito);
        arrayDigitos.push(digito);

    }
    //console.log(arrayDigitos.toString())
    arrayDigitos.reverse();
    //console.log(arrayDigitos.toString())
    let alReves = arrayDigitos.join("");
    //console.log(alReves)
    if (textNumero.value == alReves) {
        resultado.innerHTML = "ES CAPICUA";
    } else {
        resultado.innerHTML = "NO ES CAPICUA";
    }
    //matematicamente
    /*let numero = parseInt(textNumero.value);
    while (numero > 0) {
        let resto = numero % 10;
        numero = Math.floor(numero / 10);
}*/
}