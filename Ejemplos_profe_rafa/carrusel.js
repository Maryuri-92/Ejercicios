const listaImagenes = ["Halcon.jpg", "DestructorEstelar.avif", "Firespray.avif", "SnowSpeeder.avif", "TieAdvanced.avif", "TieBomber.jfif", "TieFighter.webp", "Xwing.avif", "YWing.avif"];
let imagenCarrusel = document.getElementById("imagenCarrusel");

let posicionCarrusel = 0;

function moverDerecha() {
    posicionCarrusel++;
    if (posicionCarrusel == listaImagenes.length) {
        posicionCarrusel = 0;
    }
    imagenCarrusel.src = `imagenesCarrusel/${listaImagenes[posicionCarrusel]}`;
}

function moverIzquierda() {
    posicionCarrusel--;
    if (posicionCarrusel == -1) {
        posicionCarrusel = listaImagenes.length - 1;
    }
    imagenCarrusel.src = `imagenesCarrusel/${listaImagenes[posicionCarrusel]}`;
}

//document.getElementById("cuerpo").addEventListener("mousemove", evento => console.log(evento.clientX + " - " + evento.clientY));

document.getElementById("cuerpo").addEventListener("keydown", evento => moverCarrusel(evento))

function moverCarrusel(evento) {
    if (evento.code == "ArrowRight") {
        moverDerecha();
    } else {
        if (evento.code == "ArrowLeft") {
            //moverIzquierda();
            document.getElementById("flechaIzq").click();
        }
    }

}