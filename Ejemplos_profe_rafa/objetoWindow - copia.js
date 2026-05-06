function metodo1() {
    // window.alert("Hola");
    alert("Hola");
}

function metodo2() {
    let salir = confirm("Esta seguro que desea salir?")
    if (salir) {
        window.close();
    } else {
        alert("El usuario no quiere salir");
    }
}

function metodo3() {

    let nombreVentana = prompt("Introduce el nombre de la ventana");
    window.open("", nombreVentana, "fullscreen=yes");
    let span = document.getElementById("enlace");
    span.innerHTML = `<a href="Agenda.html" target="${nombreVentana}"> Abrir Google</a>`;
}

function metodo3_1() {
    alert(`tienes ${prompt("cuantos años tienes?")} años`);
    /*let edad = prompt("cuantos años tienes?");
    alert(`tienes ${edad} años`);*/
}

let intervalo;
let contador;

function metodo4() { //setInterval
    contador = 0;
    intervalo = setInterval(contar, 100); //Nombre de la funcion SIN parentesis
    // TODO deshabilitar boton de seatINterval
}

function metodo5() {//clearINterval
    clearInterval(intervalo);
    // TODO volver a habilitar el boton de seatINterval
}



function contar() {
    contador++;
    document.getElementById("contador").innerHTML = contador;
}

function metodo6() {
    setTimeout(() => window.close(), 5000);
}