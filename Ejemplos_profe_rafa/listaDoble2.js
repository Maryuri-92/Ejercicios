
function pasarUno(origen, destino) {
    let listaOrigen = document.getElementById(origen);
    let listaDestino = document.getElementById(destino);
    if (listaOrigen.selectedIndex > -1) {
        listaDestino.options.add(listaOrigen.selectedOptions[0]);
    }
}

function pasarTodos(origen, destino) {
    let listaOrigen = document.getElementById(origen);
    let listaDestino = document.getElementById(destino);
    for (let pos = 0; pos < listaOrigen.options.length;) {
        listaDestino.options.add(listaOrigen.options[pos]);
    }
}