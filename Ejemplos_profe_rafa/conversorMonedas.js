
function convertir() {
    let cajaEuros = document.getElementById("txtEuros");
    let divResultado = document.getElementById("divResultado");
    let resultado = 0;
    /************** Array con los 3 radios ******************/
    let radios1 = document.getElementsByName("moneda");  
    let radios2 = document.querySelectorAll("[type=radio]");
    for (let radio of radios2) {
        if (radio.checked) {
            resultado = cajaEuros.value * radio.value;
        }
    }
    /************** Cada radio por su id ******************/
    let radioDolar = document.getElementById("rdDolar");
    let radioLibra = document.getElementById("rdLibra");
    let radioYen = document.getElementById("rdYen");
    if (radioDolar.checked) {
        resultado = `${cajaEuros.value * 1.18} dolares`;
        //resultado = `${cajaEuros.value * radio.value} dolares`;
    } else if (radioLibra.checked) {
        resultado = `${cajaEuros.value * 0.86} libras`;
        //resultado = `${cajaEuros.value * radio.value} libras`;
    } else if (radioYen.checked) {
        resultado = `${cajaEuros.value * 183.82} yenes`;
        //resultado = `${cajaEuros.value * radio.value} yenes`;
    }
    /**************** Seleccionando el checked ****************/
    let radioSeleccionado = document.querySelector("[name=moneda]:checked");
    resultado = `${cajaEuros.value * radioSeleccionado.value} ${radioSeleccionado.dataset.simbolo}`;

    divResultado.innerHTML = resultado;
}