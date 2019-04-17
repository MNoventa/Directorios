//Decorador. Añade a una clase una método nuevo

function estampar(logo: string){
	return function(target: Function){
		target.prototype.estampacion = function():void{
			console.log("Camiseta estampada con el logo: "+logo);
		}
	}
}

//Clase padre

@estampar("Gucci"); //Se le asigna un decorador
class Vehiculo{
	private motor: string;
	private rendimiento: string;
	private precio: number;

	constructor (motor: string, rendimiento: string, precio: number){
		this.motor = motor;
		this.rendimiento = rendimiento;
		this.precio = precio;
	}

	public setMotor(motor: string){
		this.motor = motor;
	}

	public getMotor():string{
		return this.motor;
	}
}

//Clase hija

class Coche extends Vehiculo{
	public color: string;
	public aleron: boolean;

	setColor(color: string){
		this.color = color;
	}

	getColor():string{
		return this.color;
	}
}

let seat = new Coche("bajo", "regular", 2000);
console.log(seat);


seat.estampacion();

