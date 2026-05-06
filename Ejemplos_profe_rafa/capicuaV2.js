function capicua() {
    let cajaNumero = document.getElementById("txtNumero");
    let divResultado = document.getElementById("divResultado");

    let digitos = [];

    for(let digito of cajaNumero.value) {
        //console.log(digito);
        digitos.push(digito);
    }
    let capicua = true;
    //for(pos = 0; pos < length; pos++)
    for(let posIzq = 0, posDer = digitos.length-1; posIzq < posDer && capicua; posIzq++, posDer--) {
        if (digitos[posIzq] != digitos[posDer]) {
            capicua = false;
        }
    }
    if (capicua) {
        divResultado.innerHTML = `El número ${cajaNumero.value} es capicua`;
    } else {
        divResultado.innerHTML = `El número ${cajaNumero.value} NO es capicua`;
    }
}