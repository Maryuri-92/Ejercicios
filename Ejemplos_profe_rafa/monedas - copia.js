function convertir() {
    let cajamoneda = document.getElementById("cajaMoneda");
    let elegido = document.querySelector(`input[type="radio"]:checked`);
    let resultado = document.getElementById("resultado");

    resultado.innerHTML = `${cajamoneda.value * elegido.value} ${elegido.dataset.simbolo}`;
}