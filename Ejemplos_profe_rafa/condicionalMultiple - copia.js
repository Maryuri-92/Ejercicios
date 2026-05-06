function verDia() {
    let listaDias = document.getElementById("slcDia");
    let divResultado = document.getElementById("divResultado");

/*     if (listaDias.value == "1") {
        divResultado.innerHTML = "Lunes";
    } else {
        if (listaDias.value == "2") {
           divResultado.innerHTML = "Martes";
        } ...
    } */
   switch(listaDias.value) { //La comparación es con ===
        case "1": divResultado.innerHTML = "Lunes";
                break;
        case "2": divResultado.innerHTML = "Martes";
                break;
        case "3": divResultado.innerHTML = "Miércoles";
                break;
        case "4": divResultado.innerHTML = "Jueves";
                break;
        case "5": divResultado.innerHTML = "Viernes";
                break;
        case "6": divResultado.innerHTML = "Sábado";
                break;
        case "7": divResultado.innerHTML = "Domingo";
        //default: divResultado.innerHTML = "El valor no es correcto";
   }
}

function tipo() {
    let listaTipos = document.getElementById("slcTipo");
    let div = document.getElementById("divTipo");
    switch(listaTipos.value) {
        case "GIF":
        case "JPG":
        case "BMP": div.innerHTML = "Es de tipo Imagen";
            break;
        case "MP3":
        case "MP4": div.innerHTML = "Es de tipo Multimedia";
            break;
        case "TXT":
        case "HTML": div.innerHTML = "Es de tipo Texto";
            break;
        default: div.innerHTML = "Tipo desconocido";
    }
}