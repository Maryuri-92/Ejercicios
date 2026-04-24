const imagenes = ["https://w7.pngwing.com/pngs/924/639/png-transparent-cartoon-cow-black-and-white-dairy-cow-sitting-thumbnail.png", "https://w7.pngwing.com/pngs/537/754/png-transparent-butterfly-cartoon-cute-cartoon-smiley-cartoons-fictional-character-thumbnail.png", "https://w7.pngwing.com/pngs/542/1001/png-transparent-giraffe-drawing-cartoon-giraffe-mammal-animals-vertebrate-thumbnail.png", "https://w7.pngwing.com/pngs/388/86/png-transparent-spiderman-cartoon-thumbnail.png", "https://w7.pngwing.com/pngs/388/86/png-transparent-spiderman-cartoon-thumbnail.png", "https://w7.pngwing.com/pngs/391/1/png-transparent-stitch-lilo-pelekai-animated-film-drawing-cartoon-lilo-and-stitch-marine-mammal-mammal-dog-like-mammal-thumbnail.png"
];
let imagenPrincipal = document.getElementById("vaca");
let posicion = 0;

function flechaDer() {
    posicion++;
    if (posicion == imagenes.length) {
        posicion = 0;
    }
    imagenPrincipal.src = `${imagenes[posicion]}`;
}

function flechaIzq() {
    posicion--;
    if (posicion == -1) {
        posicion = imagenes.length - 1;
    }
    imagenPrincipal.src = `${imagenes[posicion]}`;
}

document.getElementById("cuerpo").addEventListener("keydown", evento => moverCarrusel(evento))

function moverCarrusel(evento) {
    if (event.code == "ArrowRight") {
        flechaDer();
        //document.getElementById("flecha1").click();
    } else {
        if (event.code == "ArrowLeft") {
            flechaIzq();
        }
    }
}