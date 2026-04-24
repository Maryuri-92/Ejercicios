function capicua() {
    let textNumero = document.getElementById("textNumero");
    let resultado = document.getElementById("resultado")

    let arrayDigitos = [];
    //por caracteres
    for (let digito of textNumero.value) {
        //console.log(digito);
        arrayDigitos.push(digito);

    }
    let capicua = true;
    //for(pos = 0; pos < length; pos++)
    for (let posIzq = 0, posDer = arrayDigitos.length - 1; posIzq < posDer && capicua; posIzq++, posDer--) {
        if (arrayDigitos[posIzq] != arrayDigitos[posDer]) {
            capicua = false;
        }
    }
    if (capicua) {
        resultado.innerHTML = `El numero ${textNumero.value} Es capicua`;
    } else {
        resultado.innerHTML = `El numero ${textNumero.value} NO es capicua`;
    }
}