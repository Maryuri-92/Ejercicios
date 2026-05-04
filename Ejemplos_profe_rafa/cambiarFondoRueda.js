let colorFondo = 0;

let cuerpo = document.querySelector("body");
let span = document.getElementById("color");
cuerpo.addEventListener("wheel", (eventoRueda) => {
    let colorFuturo = colorFondo + parseInt(eventoRueda.deltaY * 200);
    
    //console.log(`Decimal: ${colorFondo}, hexadecimal: ${colorFondo.toString(16)}, deltaY: ${eventoRueda.deltaY}, deltaMode: ${eventoRueda.deltaMode}`)
     if (colorFuturo >= 0 && colorFuturo <= (255*255*255)) {
        colorFondo = colorFuturo;
        cuerpo.style.backgroundColor = `#${colorFondo.toString(16)}`;
        span.innerHTML = `#${colorFondo.toString(16)}`;
    }
});

/*setInterval(() => {
    let colorFuturo = colorFondo + 10000;
    
    //console.log(`Decimal: ${colorFondo}, hexadecimal: ${colorFondo.toString(16)}, deltaY: ${eventoRueda.deltaY}, deltaMode: ${eventoRueda.deltaMode}`)
     if (colorFuturo >= 0 && colorFuturo <= (255*255*255)) {
        colorFondo = colorFuturo;
        cuerpo.style.backgroundColor = `#${colorFondo.toString(16)}`;
        span.innerHTML = `#${colorFondo.toString(16)}`;
    }
}, 10);*/