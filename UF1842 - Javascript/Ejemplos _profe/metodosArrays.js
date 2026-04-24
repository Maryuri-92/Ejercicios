let datos = [4, 5, 6, 2, 1, 3, 7, 9, 0, 10];
let divResultado = document.getElementById("divResultado");

function metodo1() {
    divResultado.innerHTML = datos.toString();
}

function metodo2() {
    divResultado.innerHTML = datos.join(" - ");
    //divResultado.innerHTML = `<ul><li>${datos.join("</li><li>")}</li></ul>`;
}

function metodo3() {
    let ultimo = datos.pop();
    divResultado.innerHTML = `Extraido ${ultimo}. El array resultante es: ${datos}`; //Al imprimir un array, se llama por defecto al método toString();
}

function metodo4() {
    let longitud = datos.push(11);
    divResultado.innerHTML = `Añadido al final el 11. El array resultante es: ${datos} y su longitud es: ${longitud}`;
}

function metodo5() {
    let primero = datos.shift();
    divResultado.innerHTML = `Extraido ${primero}. El array resultante es: ${datos}`; 
}

function metodo6() {
    let longitud = datos.unshift(12);
    divResultado.innerHTML = `Añadido al principio el 12. El array resultante es: ${datos} y su longitud es: ${longitud}`;
}

function metodo7() {
    let nuevo = datos.concat([20, 21, 22]);
    divResultado.innerHTML = `Concatenados ${datos} y ${[20, 21, 22]}. El resultado es: ${nuevo}`;
}

function metodo8() {
    let eliminados = datos.splice(3);
    divResultado.innerHTML = `Eliminados ${eliminados}. Quedan ${datos}`;
}

function metodo9() {
    let eliminados = datos.splice(3, 2);
    divResultado.innerHTML = `Eliminados ${eliminados}. Quedan ${datos}`;
}

function metodo10() {
    let eliminados = datos.splice(3, 2, 45, 46, 47);
    divResultado.innerHTML = `Eliminados ${eliminados}. Quedan ${datos}`;
}

function metodo11() {
    let extraidos = datos.slice(5, 8);
    divResultado.innerHTML = `Extraidos ${extraidos}. Quedan ${datos}`;
}

function metodo12() {
    let extraidos = datos.slice(5);
    divResultado.innerHTML = `Extraidos ${extraidos}. Quedan ${datos}`;
}

function metodo13() {
    datos.sort();
    divResultado.innerHTML = `Datos ordenados: ${datos}`;
}

function metodo14() {
    datos.sort((a, b) => a - b);
    divResultado.innerHTML = `Datos ordenados: ${datos}`;
} 

function metodo15() {
    datos.sort((a, b) => b - a);
    divResultado.innerHTML = `Datos ordenados: ${datos}`;
} 

function metodo16() {
    datos.reverse();
    divResultado.innerHTML = `Datos al revés: ${datos}`;
}