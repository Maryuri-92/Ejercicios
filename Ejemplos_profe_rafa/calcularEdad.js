let fecha = document.getElementById("fecha");
let resultado1 = document.getElementById("resultado1");
let resultado2 = document.getElementById("resultado2");

function edad() {
    let fechaCump = new Date(fecha.value);
    let fechaHoy = new Date();
    // por milisegundos desde 1/1/1970
    let miliNacimiento = fechaCump.getTime();
    let miliHoy = fechaHoy.getTime();

    let miliEdad = miliHoy - miliNacimiento;
    let edad = miliEdad / (1000 * 60 * 60 * 24 * 365);
    resultado1.innerHTML = `tienes ${Math.floor(edad)} años`;

    // por año, mes y dia
    let anoHoy = fechaHoy.getFullYear();
    let mesHoy = fechaHoy.getMonth();
    let diaHoy = fechaHoy.getDate();

    let anoNac = fechaCump.getFullYear();
    let mesNac = fechaCump.getMonth();
    let diaNac = fechaCump.getDate();

    let anosEdad = anoHoy - anoNac; //26= 2026 -2000
    if (mesNac < mesHoy) {
        anosEdad--;
    } else {
        if (mesNac == mesHoy && diaNac > diaHoy) {
            anosEdad--;
            resultado2.innerHTML = `tienes ${Math.floor(edad)} años`;
        }

    }
}