
//Clase: molde del objeto. NORMALMENTE DEBE LLAMARSE IGUAL QUE EL DOC. ESTE DOCUMENTO SE DEBERIA DE LLAMAR camiseta.ts

//public: se puede acceder a la propiedad desde cualquier parte del documento.
//private: solamente se puede acceder a la propiedad desde dentro de la clase.
//protected: se puede acceder a la propiedad desde la misma clase o desde una clase que la herede.

//export se utiliza para que la clase se pueda exportar. En este caso al documento 05.exportar-clase.ts.
//implements para implementar la interface declarada más abajo

/*export*/ class Camiseta implements CamisetaBase{
	private color: string;
	private modelo: string;
	private marca: string;
	private talla: string;
	private precio: number;

	//constructor 

	constructor(color, modelo, marca, talla, precio){
		this.color = color;
		this.modelo = modelo;
		this.marca = marca;
		this.talla = talla;
		this.precio = precio;
	}

	/* interface, con respecto a las interfaces, como le hemos aplicado el "contrato" 
	de que tienen que utilizarse dos funciones específicas, si modificamos el nombre
	de las mismas, aparecerá un error en consola indicandonos que los metodos especificados
	en interface, no han sido declarados */

	public setColor(color){
		this.color = color;
	}

	public getColor(){
		return this.color;
	}
}

var camiseta = new Camiseta("rojo", "manga larga", "nike", "L", 14);

/* Ya no funcionarían porque las propiedades son privadas
camiseta.color = "Rojo";
camiseta.modelo = "Manga larga";
camiseta.marca = "Nike";
camiseta.talla = "L";
camiseta.precio = 10;
*/

camiseta.setColor("Rojo");

console.log(camiseta);


/* INTERFACE. "Contrato" que deberá de tener una clase en la que se le va a indicar
a que tenga una serie de propiedades o metodos de forma obligatoria. Se suele utilizar en softwares muy "exigentes" */

interface CamisetaBase{
	setColor(color);
	getColor();
}