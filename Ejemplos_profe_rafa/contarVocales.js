function contarVocales() {
    let cajaTexto = document.getElementById("txtTexto");
    let divResultado = document.getElementById("divResultado");

    let contadorA = 0;
    let contadorE = 0;
    let contadorI = 0;
    let contadorO = 0;
    let contadorU = 0;

    for(let caracter of cajaTexto.value) {
        //console.log(`Caracter: ${caracter}`);
        switch(caracter) {
            case "a": contadorA++;
                break;
            case "e": contadorE++;
                break;
            case "i": contadorI++;
                break;
            case "o": contadorO++;
                break;
            case "u": contadorU++;
        }
    }
    divResultado.innerHTML = `
       <ul>
            <li>Hay ${contadorA} letras a</li>
            <li>Hay ${contadorE} letras e</li>
            <li>Hay ${contadorI} letras i</li>
            <li>Hay ${contadorO} letras o</li>
            <li>Hay ${contadorU} letras u</li>
       </ul> 
    `;
}