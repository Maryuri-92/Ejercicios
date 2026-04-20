function esPar() {
    let cajaNumero = document.getElementById("txtNumero");
    let numero = parseInt(cajaNumero.value);
    let div = document.getElementById("divResultado");
    if (isNaN(numero) == false) { //if (!isNaN(numero)) {
        let resto = numero % 2;
        /*si el resto es cero 
            en el div pongo "Es par"
        sino
            en el div pongo "es impar"*/
        if (resto == 0) {
            div.innerHTML = "<span class='par'>El número es PAR</span>";
        } else {
            div.innerHTML = "<span style='color:green'>El número es IMPAR</span>";
        }
    } else {
        div.innerHTML = "Por favor, introduzca un valor en la caja de texto";
    }
}

function esPositivo() {
    let cajaNumero = document.getElementById("txtNumero");
    let numero = parseInt(cajaNumero.value);
    let div = document.getElementById("divResultado");

    if (numero >= 0) {
        div.innerHTML = "<span class='par'>El número es POSITIVO</span>";
    } else {
        div.innerHTML = "<span style='color:green'>El número es NEGATIVO</span>";
    }
}

function esPositivo2() {
    let cajaNumero = document.getElementById("txtNumero");
    let numero = parseInt(cajaNumero.value);
    let div = document.getElementById("divResultado");

    if (numero == 0) {
        div.innerHTML = "<span class='par'>El número es CERO</span>";
    } else {
        if (numero > 0) {
            div.innerHTML = "<span class='par'>El número es POSITIVO</span>";
        } else {
            div.innerHTML = "<span class='par'>El número es NEGATIVO</span>";
        }
    }

}