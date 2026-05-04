function verPrediccionLeo() {
    document.getElementById("txtPrediccion").value = "Leo va bien";
}
function verPrediccionPiscis() {
    document.getElementById("txtPrediccion").value = "Piscis va regulin";
}
// El resto de signos

function verPrediccion(signo) {
    switch (signo) {
        case "leo":
            document.getElementById("txtPrediccion").value = "Leo va bien";
            break;
        case "piscis":
            document.getElementById("txtPrediccion").value = "Piscis va regulin";
            break;
        case "aries":
            document.getElementById("txtPrediccion").value = "Aries tya chungo";
            break;
        //El resto de case para los otros signos
    }
}

const predicciones = ["Leo va bien", "Piscis ta regulin", "Aries ta chungo"];
function verPrediccion2(pos) {
    document.getElementById("txtPrediccion").value = predicciones[pos];
}