let primero = 0;
let segundo = 0;
let postre = 0;

function calcularTotal(radio) {
    switch (radio.name) {
        case "primerPlato": primero = parseFloat(radio.value);
            break;
        case "segundoPlato": segundo = parseFloat(radio.value);
            break;
        case "postre": postre = parseFloat(radio.value);
    }
    let total = primero + segundo + postre;
    document.getElementById("importeTotal").innerHTML = total.toFixed(2);
}
/****************** OTRA OPCION *********************/
let radioSopa = document.getElementById("radioSopa");
let radioCaldo = document.getElementById("radioCaldo");
let radioConsome = document.getElementById("radioConsome");
// Y las otros 6 radios
function calcularTotal2() {
    let total = 0;
    if (radioSopa.checked) {
        total = total + parseFloat(radioSopa.value);
    }
    if (radioCaldo.checked) {
        total = total + parseFloat(radioCaldo.value);
    }
    if (radioConsome.checked) {
        total = total + parseFloat(radioConsome.value);
    }
    // Y seguir con los otros 6
}

/************** Usando querySelectorAll *****************/
function calcularTotal3() {
    //document.getElementById("id1") ==> document.querySelector("#id1")
    let radiosSeleccionados = document.querySelectorAll(".seccionComida :checked");
    let total = 0;
    for (let radio of radiosSeleccionados) {
        total = total + parseFloat(radio.value);
    }
    alert(`Total: ${total}`)
}

