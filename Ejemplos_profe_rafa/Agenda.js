let agenda = []; //Array de objetos cita

document.getElementById("btnNuevaCita").addEventListener("click", () => {
    let cajaAsunto = document.getElementById("txtAsunto");
    let cajaDonde = document.getElementById("txtDonde");
    let cajaFecha = document.getElementById("txtFecha");

    // Creamos el objeto cita con los valores introducidos por el usuario
    let cita = {
        asunto: cajaAsunto.value,
        donde: cajaDonde.value,
        fecha: cajaFecha.value //fecha: new Date(cajaFecha.value)
    }
    //console.log(cita);

    //Guardar el objeto cita en el array de citas (agenda)
    agenda.push(cita);
    // Ordenar el array por fecha
    ordenarPorFecha();
    //console.log(agenda);

    //Borrar las cajas de texto para evitar repeticiones de citas
    cajaAsunto.value = "";
    cajaDonde.value = "";
    cajaFecha.value = "";

    imprimirAgenda();
});

function borrarCita(posicion) {

    agenda.splice(posicion, 1);

    //console.log(agenda);

    imprimirAgenda();

}

function imprimirAgenda() {
    //Repinto el body de la tabla con el contenido del array
    let cuerpo = "";
    for (let pos = 0; pos < agenda.length; pos++) {
        let fecha = new Date(agenda[pos].fecha);
        cuerpo = cuerpo + `
            <tr>
                <td>${fecha.toLocaleDateString()}</td>
                <td>${agenda[pos].donde}</td>
                <td>${agenda[pos].asunto}</td>
                <td><input type="button" value="Borrar" onclick="borrarCita(${pos});"></td>
            </tr>
        `;
    }
    document.getElementById("cuerpoTabla").innerHTML = cuerpo;
}

function ordenarPorFecha() {
    agenda.sort((cita1, cita2) => {
        if (cita1.fecha > cita2.fecha) {
            return 1;
        } else {
            if (cita1.fecha == cita2.fecha) {
                return 0;
            } else {
                return -1;
            }
        }
    });
}

function verFechaHoy() {
    let fechaHoy = new Date();
    let spanFechaHoy = document.getElementById("fechaHoy");
    spanFechaHoy.innerHTML = `Hoy es ${fechaHoy.toLocaleDateString()}`;
    //document.getElementById("fechaHoy") = new Date();
}