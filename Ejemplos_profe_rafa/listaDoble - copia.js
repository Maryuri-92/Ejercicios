let listaDerecha = document.getElementById("listaDerecha");
let listaIzquierda = document.getElementById("listaIzquierda");

function pasarUnoDerecha() {
    if (listaIzquierda.selectedIndex > -1) {
        listaDerecha.options.add(listaIzquierda.selectedOptions[0]);
    }
}

function pasarUnoIzquierda() {
    if (listaDerecha.selectedIndex > -1) {
        listaIzquierda.options.add(listaDerecha.selectedOptions[0]);
    }
}

function pasarTodosDerecha() {
    for (let pos = 0; pos < listaIzquierda.options.length;) {
        listaDerecha.options.add(listaIzquierda.options[pos]);
    }
}

function pasarTodosIzquierda() {
    for (let pos = 0; pos < listaDerecha.options.length;) {
        listaIzquierda.options.add(listaDerecha.options[pos]);
    }
}

