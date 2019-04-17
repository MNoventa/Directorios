//Funciones clasicas en js:
function getNumero(numero) {
    return "El número es: " + numero;
}
console.log(getNumero(21));
//Funciones en ts:
//Especificamos que tipo de dato recoje por parámetro, y qué tipo de dato va a devolver
function getNumero2(numero) {
    if (numero === void 0) { numero = 12; }
    return "El numero es " + numero;
}
