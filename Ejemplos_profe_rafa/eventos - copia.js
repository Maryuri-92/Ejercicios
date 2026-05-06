let pantalla = document.getElementById("pantallaResultado");

function alCargar() {
    //const NUMERO_ELEMENTOS = 12;
    pantalla.innerHTML = "Formateando disco duro...";
}

function ratonEncima() {
   //pantalla = document.getElementById("pantallaResultado");
    pantalla.innerHTML = "El ratón está encima del elemento";
}

function ratonFuera() {
    //pantalla = document.getElementById("pantallaResultado");
    pantalla.innerHTML = "El ratón está fuera del elemento";
}

function dobleClick() {
    //pantalla = document.getElementById("pantallaResultado");
    pantalla.innerHTML = "Has hecho doble click";
}

function ruedaRaton() {
    //pantalla = document.getElementById("pantallaResultado");
    pantalla.innerHTML = "La rueda se ha movido";
}