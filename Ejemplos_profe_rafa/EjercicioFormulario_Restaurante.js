let primero = 0;
let segundo = 0;
let postre = 0;

function eleccion(radio) {
    switch (radio.name) {
        case "primerPlato": primero = parseFloat(radio.value);
            break;
        case "segundoPlato": segundo = parseFloat(radio.value);
            break;
        case "postre": postre = parseFloat(radio.value);
            break;
    }
    let total = primero + segundo + postre;
    document.getElementById("total").innerHTML = total.toFixed(2);
}

/******** Usando querySelectorAll ************/
function calcularTotal3() {
    //document.getElementById("id") ==> document.querySelector("#id")
    let radiosSeleccionados = document.querySelectorAll(".seccionComida :checked");
    let total = 0;
    for (let radio of radiosSeleccionados) {
        total = total + parseFloat(radio.value);
    }
    alert(`Total: ${total}`)
}

