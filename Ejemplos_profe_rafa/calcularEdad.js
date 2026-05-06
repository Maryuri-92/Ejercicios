document.getElementById("btnCalcularEdad").addEventListener("click", () => {
    let cajaFechaNacimiento = document.getElementById("txtFechaNacimiento");
    let fechaNacimiento = new Date(cajaFechaNacimiento.value);
    let fechaHoy = new Date();

    // Por milisegundos desde el 1/1/1970
    let miliNacimiento = fechaNacimiento.getTime();
    let miliHoy = fechaHoy.getTime();
    let miliEdad = miliHoy - miliNacimiento;
    console.log(miliEdad);
    let edad = miliEdad / (1000*60*60*24*365.25);
    document.getElementById("divResultado1").innerHTML = `Tienes ${Math.floor(edad)} años`;

    // Por año, mes y día
    let anoHoy = fechaHoy.getFullYear();
    let mesHoy = fechaHoy.getMonth();
    let diaHoy = fechaHoy.getDate();

    let anoNac = fechaNacimiento.getFullYear();
    let mesNac = fechaNacimiento.getMonth();
    let diaNac = fechaNacimiento.getDate();

    let anosEdad = anoHoy - anoNac; //26 = 2026 - 2000
    if (mesNac > mesHoy) {
        anosEdad--;
    } else {
        if (mesNac == mesHoy && diaNac > diaHoy) {
            anosEdad--;
        }
    }
    document.getElementById("divResultado2").innerHTML = `Tienes ${anosEdad} años`;
});