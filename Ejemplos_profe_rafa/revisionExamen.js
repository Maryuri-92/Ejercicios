/************* EJERCICIO 1 **************/
function operacion() {
    let cajaNumero1 = document.getElementById("txtNumero1");
    let cajaNumero2 = document.getElementById("txtNumero2");
    let cajaSuma = document.getElementById("txtSuma");
    let cajaResta = document.getElementById("txtResta");
    
    let numero1 = parseInt(cajaNumero1.value);
    let numero2 = parseInt(cajaNumero2.value);

    cajaSuma.value = numero1 + numero2;
    cajaResta.value = numero1 - numero2;
}

/*********** EJERCICIO 2 *************/
function verImagenFinal() {
    let imagen = document.getElementById("imagen");
    imagen.src = "final.png";
}

function verImagenInicial() {
    let imagen = document.getElementById("imagen");
    imagen.src = "inicial.png";
}

function verImagenFinal2() {
    let imagen2 = document.getElementById("imagen2");
    imagen2.src = "final.png";
    imagen2.onmouseleave = () => {imagen2.src = "inicial.png"};
}

/*********** EJERCICIO 3 *************/
function promedio(arrayNumeros) {
    let total = 0;
    for (let numero of arrayNumeros) {
        total = total + numero;
    }
    alert(total / arrayNumeros.length);
}

/********** EJERCICIO 4 **************/
function mezclar() {
    let cajaTexto1 = document.getElementById("txtTexto1");
    let cajaTexto2 = document.getElementById("txtTexto2");
    let cajaResultado = document.getElementById("txtResultado");
    cajaResultado.value = "";
    for (let pos = 0; pos < cajaTexto1.value.length; pos++) {
        cajaResultado.value = cajaResultado.value + cajaTexto1.value.charAt(pos) + cajaTexto2.value.charAt(pos);
    }
}

/************ EJERCICIO 5 **************/
function aplicarNivel() {
    let texto = document.getElementById("txtTexto").value;
    let nivel = document.getElementById("slcNivel").value;
    let divResultado = document.getElementById("divResultado");
    switch(nivel) {
        case "1": divResultado.innerHTML = `<h1>${texto}</h1>`;
            break;
        case "2": divResultado.innerHTML = `<h2>${texto}</h2>`;
            break;
        case "3": divResultado.innerHTML = `<h3>${texto}</h3>`;
            break;
        case "4": divResultado.innerHTML = `<h4>${texto}</h4>`;
            break;
        case "5": divResultado.innerHTML = `<h5>${texto}</h5>`;
            break;
        case "6": divResultado.innerHTML = `<h6>${texto}</h6>`;
            break;
    }
}

function aplicarNivel3() {
    let cajaTexto = document.getElementById("txtTexto");
    let selectNivel = document.getElementById("slcNivel");
    let divResultado = document.getElementById("divResultado");
    switch(selectNivel.value) {
        case "1": divResultado.innerHTML = `<h1>${cajaTexto.value}</h1>`;
            break;
        case "2": divResultado.innerHTML = `<h2>${cajaTexto.value}</h2>`;
            break;
        case "3": divResultado.innerHTML = `<h3>${cajaTexto.value}</h3>`;
            break;
        case "4": divResultado.innerHTML = `<h4>${cajaTexto.value}</h4>`;
            break;
        case "5": divResultado.innerHTML = `<h5>${cajaTexto.value}</h5>`;
            break;
        case "6": divResultado.innerHTML = `<h6>${cajaTexto.value}</h6>`;
            break;
    }
}

function aplicarNivel4() {
    let texto = document.getElementById("txtTexto").value;
    let nivel = document.getElementById("slcNivel").value;
    let divResultado = document.getElementById("divResultado");
    if (nivel == "1") {
        divResultado.innerHTML = `<h1>${texto}</h1>`; 
    } else {
        if (nivel == "2") {
            divResultado.innerHTML = `<h2>${texto}</h2>`;
        } else {
            if (nivel == "3") {
                divResultado.innerHTML = `<h3>${texto}</h3>`;
            } else {
                if (nivel == "4") {
                    divResultado.innerHTML = `<h4>${texto}</h4>`;
                } else {
                    if (nivel == "5") {
                        divResultado.innerHTML = `<h5>${texto}</h5>`;
                    } else {
                        if (nivel == "6") {
                            divResultado.innerHTML = `<h6>${texto}</h6>`;
                        }
                    }
                }
            }
        }
    }
}

function aplicarNivel2() {
    let texto = document.getElementById("txtTexto").value;
    let nivel = document.getElementById("slcNivel2").value;
    let divResultado = document.getElementById("divResultado");
    divResultado.innerHTML = `<${nivel}>${texto}</${nivel}>`;
}