function saludar() {
    let cajaNombre = document.getElementById("txtNombre");
    let nombre = cajaNombre.value;
    let cajaSaludo = document.getElementById("txtSaludo");
    cajaSaludo.value = "Hola " + nombre;
}

function saludar2() {
    let cajaNombre = document.getElementById("txtNombre");
    let cajaSaludo = document.getElementById("txtSaludo");
    cajaSaludo.value = "Hola " + cajaNombre.value;
}

function saludar3() {
    document.getElementById("txtSaludo").value = "Hola " + document.getElementById("txtNombre").value;
}