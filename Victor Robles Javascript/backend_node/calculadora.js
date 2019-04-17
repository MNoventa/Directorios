'use strict'

//Capturar parametros que se pasan por consola

/*var params = process.argv.slice(1);
	En consola:
	$ node calculadora.js  1 2 3
		[ 'D:\\mario\\Desarrollo web\\Victor Robles Javascript\\backend_node\\calcula
		dora.js',
		  '1',
		  '2',
		  '3' ]
		Hola mundo desde NodeJS
*/

var params = process.argv.slice(2);
/*	En consola:
	$ node calculadora.js  1 2 3
	[ '1', '2', '3' ]
	Hola mundo desde NodeJS
*/

console.log(params)

//parseFloat, convertir de un string a un número de coma flotante (número con el que puedes hacer operaciones)
var numero1 = parseFloat(params[0]);
var numero2 = parseFloat(params[1]);

var plantilla = `
	La suma es: ${numero1 + numero2},
	La resta: ${numero1 - numero2},
	La multiplicación: ${numero1 * numero2},
	La división: ${numero1 / numero2}
`;

console.log(plantilla)
console.log("Hola mundo desde NodeJS");