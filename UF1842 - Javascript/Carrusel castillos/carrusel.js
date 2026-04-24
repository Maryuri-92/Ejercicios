/**
 * 
 */
 
document.getElementById("carrusel").addEventListener("wheel", moverCarruselRueda);
document.addEventListener("keydown", moverCarruselTecla);

var intervalo = setInterval(moverCarruselAuto, 3000);

var posicionCarrusel = 1;

var imagenes = ["beloeil.jpg", "cardona.jpg", "chambord.jpg", "chillon.jpg", "neuschwanstein.jpg", "veves.jpg", "alhambra.jpg", "mota.jpg", "butron.jpg", "alcazar.jpg"];

var textos = ["Castillo de Beloeil (Bélgica)", "Fortaleza de Cardona (Barcelona)", "Chateau de Chambord (Loira)", "Castillo de Chillon (Lago Lemán)", "Castillo de Neuschwanstein (Alemania)", "Castillo de Vêves (Bélgica)", "La Alhambra (Granada)", "Castillo de La Mota (Medina del Campo)", "Castillo de Butrón (Vizcaya)", "El Alcazar (Segovia)"];

function moverCarruselVelocidad() {
	let velocidad = parseInt(document.getElementById("rngVelocidad").value);
	let spanVelocidad = document.getElementById("spanVelocidad");
	clearInterval(intervalo);
	if (velocidad != 0) {
		intervalo = setInterval(moverCarruselAuto, 6000 - (velocidad * 1000));
		spanVelocidad.innerHTML = `1 imagen cada ${5 - (velocidad-1)} seg.`;
	} else {
		spanVelocidad.innerHTML = "Parado";
	}
}

function cambiarVelocidad(cantidad) {
	let range = document.getElementById("rngVelocidad");
	let velocidad = parseInt(range.value);
	range.value = velocidad + cantidad;
	moverCarruselVelocidad();
}

function moverCarruselAuto() {
	posicionCarrusel = calcularPosicion(posicionCarrusel + 1);
	verImagen(posicionCarrusel);
}

function moverCarruselRueda(evento) {
	posicionCarrusel = calcularPosicion(posicionCarrusel + (evento.deltaY >= 0 ? -1 : 1));
	verImagen(posicionCarrusel);
}	

function moverCarruselTecla(evento) {
	if (evento.key == "ArrowRight") {
		posicionCarrusel = calcularPosicion(posicionCarrusel + 1);
	} else {
		if (evento.key == "ArrowLeft") {
			posicionCarrusel = calcularPosicion(posicionCarrusel - 1);
		}
	}
	verImagen(posicionCarrusel);
}

function calcularPosicion(posicion) {
	let posicionFinal = posicion;
	if (posicion == -1) {
		posicionFinal = imagenes.length - 1;
	} else {
		if (posicion == imagenes.length) {
			posicionFinal = 0;
		}
	}
	return posicionFinal;
}

function verImagen(posicion) {
	let posicionIzq = calcularPosicion(posicion + 1);
	let posicionDer = calcularPosicion(posicion - 1);
	
	document.getElementById("imagenCentro").src = `imagenes/${imagenes[posicion]}`;
	document.getElementById("imagenIzq").src = `imagenes/${imagenes[posicionIzq]}`;
	document.getElementById("imagenDer").src = `imagenes/${imagenes[posicionDer]}`;
	
	document.getElementById("captionCentro").innerHTML = textos[posicion];
	document.getElementById("captionDer").innerHTML = textos[posicionDer];
	document.getElementById("captionIzq").innerHTML = textos[posicionIzq];	
}
