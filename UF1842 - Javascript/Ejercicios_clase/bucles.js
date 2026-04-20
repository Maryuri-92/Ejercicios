function imprimir() {
    let cajaNumero = document.getElementById("numero");
    let divResultado = document.getElementById("divResultado");
    let contador = 1;
    let texto = "";
    //divResultado.innerHTML = "";
    while (contador <= cajaNumero.value) {
        texto = texto + contador + "Hola Mundo<br>";
        //divResultado.innerHTML = divResultado.innerHTML + "Hola Mundo<br>";
        //divResultado.innerHTML +="Hola Mundo<br>";
        contador = contador + 1;
        //contador += 1;
    }
    divResultado.innerHTML = texto;
}