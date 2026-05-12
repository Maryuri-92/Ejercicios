let carrito = 0;

function carritoDeProductos(comprar) {
    let resultado = document.getElementById("resultado");
    let precio = parseFloat(document.querySelector(`#${comprar} span`).innerHTML);
    let h3producto = document.querySelector(`#${comprar} h3`).innerHTML;
    let listaResultado = document.getElementById("listaResultado");
    carrito = carrito + precio;

    listaResultado.innerHTML +=
        `<li>
    <p>${h3producto}</p>
    <p>${precio}€ - Unidades: 1</p>
        </li>`;

    resultado.innerHTML = `Total ${carrito.toFixed(2)}`;

}


