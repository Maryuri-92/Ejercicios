/*function alCargar() {
    alert("Formatenado disco duro....");
}*/
function alCargar() {
    //const NUMERO_ELEMENTOS = 12;
    let pantalla = document.getElementById("pantallaResultado");
    pantalla.innerHTML = "Formateando disco duro...";
}
/*function ratonEncima() {
    alert("El raton esta encima del elemento");
}*/
function ratonEncima() {
    pantalla = document.getElementById("pantallaResultado");
    pantalla.innerHTML = "El raton encima del elemento";
}
function ratonFuera() {
    pantalla = document.getElementById("pantallaResultado");
    pantalla.innerHTML = "El raton esta fuera del elemento";
}
function dobleClick() {
    pantalla = document.getElementById("pantallaResultado");
    pantalla.innerHTML = "Al Hacer Doble Click";
}
function ratonRueda() {
    pantalla = document.getElementById("pantallaResultado");
    pantalla.innerHTML = "Se ah movido la rueda del raton";
}