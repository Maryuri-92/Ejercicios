const palabras = [
    "PERRO", "GATO", "CABALLO", "VACA", "TORO", "RATON", "TIGRE", "LEON", "PANTERA", "LEOPARDO",
    "ELEFANTE", "CEBRA", "JIRAFA", "HIPOPOTAMO", "RINOCERONTE", "BALLENA", "DELFIN", "TIBURON", "ORCA", "PULPO", "CALAMAR", "CANGREJO", "LANGOSTA", "CAMARON", "MEDUSA", "ESTRELLA DE MAR", "CABALLITO DE MAR", "FOCA", "MORSA", "PINGUINO", "ALBATROS", "PELICANO", "GAVIOTA", "AGUILA", "HALCON", "BUITRE", "CONDOR", "BUHO", "LECHUZA", "PALOMA", "CUERVO", "URRACA", "CANARIO", "FLAMENCO", "CISNE", "GANSO", "PATO", "PAVO", "GALLINA", "GALLO", "AVESTRUZ", "EMU", "CANGURO", "KOALA", "WOMBAT", "ORNITORRINCO", "EQUIDNA", "DIABLO DE TASMANIA", "LOBO", "ZORRO", "COYOTE", "HIAENA", "OSO", "PANDA", "COALA", "MAPACHE", "TEJON", "NUTRIA", "CASTOR", "ARDILLA", "CONEJO", "LIEBRE", "ERIZO", "TOPO", "MURCIELAGO", "MONO", "GORILA", "CHIMPANCE", "ORANGUTAN", "BABUINO", "LEMUR", "SURICATA", "IGUANA", "CAMALEON", "GECKO", "SERPIENTE", "COBRA", "PITON", "COCODRILO", "CAIMAN", "TORTUGA", "RANA", "SAPO", "SALAMANDRA", "TRITON", "ABEJA", "AVISPA", "HORMIGA", "MARIPOSA", "ESCARABAJO"
];

let adivinar;
let fallos = 0;
document.getElementById("divPalabra");
let imagenesAhorcado = document.getElementById("imagenesAhorcado");

function nuevaPartida() {
    fallos = 0;
    imagenesAhorcado.src = `imagenesAhorcado/0.png`;
    let numero = Math.floor(Math.random() * palabras.length);
    adivinar = palabras[numero];
    //console.log(adivinar)
    let letra = "";

    for (let guiones of adivinar) {
        letra = letra + "_";
    }
    divPalabra.innerHTML = letra;
    document.getElementById("comprobarL").disabled = false;
}
function comprobar() {
    let letraUsuario = document.getElementById("letraUsuario").value.toUpperCase();
    let resultado = "";
    let acierto = false;
    for (let pos = 0; pos < adivinar.length; pos++) {
        if (adivinar.charAt(pos) == letraUsuario) {
            resultado = resultado + letraUsuario;
            acierto = true;
        } else {
            resultado = resultado + divPalabra.innerHTML.charAt(pos);
        }
    }
    if (!acierto) {//if (acierto ==false)
        fallos++;
        imagenesAhorcado.src = `imagenesAhorcado/${fallos}.png`;
        if (fallos == 6) {
            document.getElementById("comprobarL").disabled = true;
        }
    }
    divPalabra.innerHTML = resultado;
}

