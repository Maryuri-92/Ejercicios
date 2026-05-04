function imprimir() {
    let cajaNumero = document.getElementById("txtNumero");
    let divResultado = document.getElementById("divResultado");

    let contador = 1;
    let texto = ""; //Borrar el contenido del div
    while(contador <= cajaNumero.value) {
        texto = texto + contador + " - Hola Mundo<br>";
        //divResultado.innerHTML += "Hola Mundo<br>";
        contador = contador + 1;
        //contador += 1;   
    }
    divResultado.innerHTML = texto;
}

