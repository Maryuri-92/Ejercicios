let cuerpo = document.getElementById("cuerpo");
let rango = document.getElementById("rngColor");

function cambiarFondo() {
    if (rango.value <= 25) { //if (rango.value >= 0 && rango.value <= 25)
        cuerpo.style.backgroundColor = "orange";
    } else { // => rango.value > 25
        if (rango.value <= 50) { //if (rango.value > 25 && rango.value <= 50)
            cuerpo.style.backgroundColor = "lightgreen";
        } else { // => rango.value > 50
            if (rango.value <= 75) { //if (rango.value > 50 && rango.value <= 75)
                cuerpo.style.backgroundColor = "lightblue";
            } else { // => rango.value > 75
                cuerpo.style.backgroundColor = "purple";
            }
        }
    }
}

/*     if (rango.value <= 25)//if (rango.value >= 0 && rango.value <= 25)
        cuerpo.style.backgroundColor = "orange";
    else if (rango.value <= 50) //if (rango.value > 25 && rango.value <= 50)
        cuerpo.style.backgroundColor = "lightgreen";
    else if (rango.value <= 75) //if (rango.value > 50 && rango.value <= 75)
        cuerpo.style.backgroundColor = "lightblue";
    else  // => rango.value > 75
        cuerpo.style.backgroundColor = "purple"; */

/*     if (rango.value >= 0 && rango.value <= 25) {
        cuerpo.style.backgroundColor = "orange";
    } 
    if (rango.value > 25 && rango.value <= 50) {
        cuerpo.style.backgroundColor = "lightgreen";
    } 
    if (rango.value > 50 && rango.value <= 75) {
        cuerpo.style.backgroundColor = "lightblue";
    } 
    if (rango.value > 75 && rango.value <= 100) {
        cuerpo.style.backgroundColor = "lightpurple";
    } */
