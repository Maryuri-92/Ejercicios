// 1. Seleccionamos los elementos del DOM que vamos a necesitar
const formulario = document.getElementById('formulario-propina');
const inputTotal = document.getElementById('total-cuenta');
const selectPropina = document.getElementById('porcentaje-propina');
const inputPersonas = document.getElementById('numero-personas');

// Elementos donde pintaremos los resultados
const contenedorResultado = document.getElementById('zona-resultado');
const txtPropina = document.getElementById('resultado-propina');
const txtPersona = document.getElementById('resultado-persona');

// 2. Escuchamos el evento 'submit' (cuando se envía el formulario)
formulario.addEventListener('submit', function(evento) {
    // ¡CRITICAL EXAM TIP! Evitamos que la página se recargue por defecto
    evento.preventDefault();

    // 3. Capturamos los valores de los inputs y los convertimos a números
    // Usamos parseFloat para decimales y parseInt para números enteros
    const total = parseFloat(inputTotal.value);
    const porcentaje = parseFloat(selectPropina.value);
    const personas = parseInt(inputPersonas.value);

    // 4. Hacemos las operaciones matemáticas
    const propinaTotal = total * porcentaje;
    const cuentaTotal = total + propinaTotal;
    const totalPorPersona = cuentaTotal / personas;

    // 5. Pintamos los resultados en el HTML
    // Usamos .toFixed(2) para forzar a que siempre muestre exactamente 2 decimales (céntimos)
    txtPropina.textContent = propinaTotal.toFixed(2);
    txtPersona.textContent = totalPorPersona.toFixed(2);

    // 6. Mostramos el contenedor de resultados quitando la clase que lo ocultaba
    contenedorResultado.classList.remove('oculto');
});