const VALORES = [2, 4, 2, 1, 5, 6, 2, 3, 3, 7, 8, 2];
const numeros = [587, 921, 304, 718, 662, 455, 873, 192, 640, 705, 884, 133, 529, 948, 367, 411, 782,  256, 903, 119, 744, 615, 827, 501, 392, 688, 934, 147, 578, 860, 231, 999, 412, 563, 845, 320, 754, 289, 617, 934, 208, 771, 654, 899, 302, 480, 736, 155, 628, 947, 510, 384, 799, 266, 903, 144, 672, 581, 720, 835, 190, 478, 962, 357, 411, 889, 243, 530, 764, 901, 128, 699, 577, 860, 312, 455, 983, 267, 640, 715, 402, 899, 523, 781, 364, 912, 158, 647, 734, 820, 199, 566, 945, 310, 487, 772, 268, 603, 851, 934, 221, 759, 688, 902, 315, 478, 990, 244, 671, 705, 398, 866, 541, 783, 360, 915, 176, 629, 748,829, 207, 593, 964, 341, 466, 710, 284, 602, 873, 918, 132, 754, 689, 901, 327, 499, 972, 251, 638, 720, 455, 887, 514, 769, 381, 928, 164, 653, 742, 811, 203, 584, 953, 330, 472, 795, 278, 619, 846, 930, 218, 763, 690, 905, 349, 461, 987, 259, 644, 713, 429, 874, 536, 780, 371, 921, 187, 606, 757, 842, 214, 569, 959, 324, 493, 788, 296,  631, 858, 917, 140, 746, 673, 896, 338, 452, 981, 270, 659];

let divResultado = document.getElementById("divResultado");

function media() {
    let total = 0;
    for(let pos = 0; pos < VALORES.length; pos++) {
        total = total + VALORES[pos];
        //console.log(`posicion: ${pos}, elemento: ${VALORES[pos]}, TOTAL: ${total}`);
    }
    divResultado.innerHTML = `La media es ${total / VALORES.length}`;
}

function maximo() {
    let aspiranteMax = VALORES[0];
    for (let pos = 0; pos < VALORES.length; pos++) {
        if (VALORES[pos] > aspiranteMax) {
            aspiranteMax = VALORES[pos];
            //console.log(aspiranteMax);
        }
    }
    divResultado.innerHTML = `El valor más grande es ${aspiranteMax}`;
}

function minimo() {
    let aspiranteMin = VALORES[0];
    for (let pos = 0; pos < VALORES.length; pos++) {
        if (VALORES[pos] < aspiranteMin) {
            aspiranteMin = VALORES[pos];
            //console.log(aspiranteMin);
        }
    }
    divResultado.innerHTML = `El valor más pequeño es ${aspiranteMin}`;
}

function pares() {
    let contadorPares = 0;
    for (let pos = 0; pos < VALORES.length; pos++) {
        if (VALORES[pos] % 2 == 0) {
            contadorPares++; //contadorPares = contadoPares + 1;
            //console.log(contadorPares);
        }
    }
    divResultado.innerHTML = `Hay ${contadorPares} números pares`;
}