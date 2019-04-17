
/* Se importa clase de otro archivo. Para eso, en la clase que queramos importar deberá de tener 
en su comienzo la palabra reservada export */

import {Camiseta} from './04.poo-y-interfaces';

class Main{
	constructor(){
		console.log("Aplicación JS cargada!!")
	}

	getCamiseta(){
		return new Camiseta("Rojo", "asdsada", "ijasjds", "ioasjd", 12);
	}
}

var main = new Main();