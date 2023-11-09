
function classificarNumero(numero) {
    if (numero > 0 && numero % 2 == 0) {
        console.log("Positivo e Par");

    } else if (numero > 0 && numero % 1 == 0) {
        console.log("Positivo e ímpar");

    } else if (numero < 0) {
        console.log("Negativo");
    } else if (numero == 0) {
        console.log("Neutro");
    }
}

classificarNumero(5)