function cambiarFondo() {
    let selectorColor = document.getElementById("clrFondo");
    let cuerpo = document.getElementById("cuerpo");
    cuerpo.style.backgroundColor = selectorColor.value;
}