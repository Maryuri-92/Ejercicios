let cuerpo = document.getElementById("cuerpoM");
let rango = document.getElementById("rangoM");

function rPorcentaje() {
    if (rango.value <= 25) {//if (rango.value >= 0 && rango.value <=25)
        cuerpo.style.backgroundColor = "orange";
    } else {// => rango.value >25
        if (rango.value <= 50) {
            cuerpo.style.backgroundColor = "lightgreen";
        } else {
            if (rango.value <= 75) { //if (rango.value > 50 && rango.value <= 75)
                cuerpo.style.backgroundColor = "red";
            } else {
                cuerpo.style.backgroundColor = "blue";
            }
        }
    }
}
