//Funciones clasicas en js:

function getNumero(numero){
	return "El número es: " +numero;
}

console.log(getNumero(21));

//Funciones en ts:

//Especificamos que tipo de dato recoje por parámetro, y qué tipo de dato va a devolver
function getNumero2(numero: number = 12):string{
	return "El numero es "+numero;
}
