const palabras = ["ARBOL","CAMINO","VENTANA","MESA","SILLA","LIBRO","PERRO","GATO","CIUDAD","RIO", "MONTAÑA","CIELO","MAR","PLAYA","BOSQUE","FLOR","FRUTA","PAN","AGUA","FUEGO", "TIERRA","AIRE","NUBE","LLUVIA","VIENTO","SOL","LUNA","ESTRELLA","CAMPO","CASA", "PUERTA","JARDIN","CARRETERA","COCHE","TREN","BARCO","AVION","RELOJ","ROPA","ZAPATO", "BOLSA","PARED","TECHO","SUELO","CUADRO","COLOR","SONIDO","VOZ","MANO","PIE", "CABEZA","CUERPO","HOMBRE","MUJER","NINO","NINA","AMIGO","AMIGA","FAMILIA","ESCUELA", "TRABAJO","OFICINA","CALLE","PUEBLO","PAIS","IDIOMA","COMIDA","BEBIDA","JUEGO","MUSICA", "CANCION","PELÍCULA","ARTE","CIENCIA","HISTORIA","FUTURO","PASADO","PRESENTE","MUNDO","TIEMPO", "NOCHE","DIA","SEMANA","MES","ANIO","ENERGIA","LUZ","SOMBRA","FORMA","TEXTO", "IMAGEN","MEMORIA","MENTE","SISTEMA","OBJETO","ANIMAL","PLANTA","ROCA","ARENA","METAL"];

let palabraOculta;
let fallos = 0;
let divPalabra = document.getElementById("divPalabra");
let imagenAhorcado = document.getElementById("imagenAhorcado");
let seccionLetras = document.getElementById("seccionLetras");

function crearLetras() {
    seccionLetras.innerHTML = "";
    for (let codigo = "A".charCodeAt(); codigo <= "Z".charCodeAt(); codigo++) {
        seccionLetras.insertAdjacentHTML("beforeend", `<span id=letra${String.fromCharCode(codigo)}>${String.fromCharCode(codigo)}</span>`);
    }
}

function nuevaPartida() {
    fallos = 0;
    imagenAhorcado.src = `imagenesAhorcado/0.png`;
    crearLetras();
    let numero = Math.floor(Math.random() * palabras.length);
    palabraOculta = palabras[numero];
    console.log(palabraOculta)
    let guiones = "";
    for(let letra of palabraOculta) {
        guiones = guiones + "_";
    }
    divPalabra.innerHTML = guiones;
    document.getElementById("btnComprobar").disabled = false;
    document.getElementById("txtLetraUsuario").value = "";
}

function comprobarLetra() {
    let letraUsuario = document.getElementById("txtLetraUsuario").value.toUpperCase();
    let resultado = "";
    let acierto = false;
    for (let pos = 0; pos < palabraOculta.length; pos++) {
        if (palabraOculta.charAt(pos) == letraUsuario) {
            resultado = resultado + letraUsuario;
            acierto = true;
            document.getElementById(`letra${letraUsuario}`).style.backgroundColor = "green";
        } else {
            resultado = resultado + divPalabra.innerHTML.charAt(pos);
        }
    }
    if (!acierto) { //if (acierto == false)
        fallos++;
        document.getElementById(`letra${letraUsuario}`).style.backgroundColor = "red";
        imagenAhorcado.src = `imagenesAhorcado/${fallos}.png`;
        if (fallos == 6) {
            document.getElementById("btnComprobar").disabled = true;
        }
    }
    divPalabra.innerHTML = resultado;
    document.getElementById("txtLetraUsuario").value = "";
}