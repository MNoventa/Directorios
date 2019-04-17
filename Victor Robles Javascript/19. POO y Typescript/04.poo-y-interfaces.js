//Clase: molde del objeto. NORMALMENTE DEBE LLAMARSE IGUAL QUE EL DOC. ESTE DOCUMENTO SE DEBERIA DE LLAMAR camiseta.ts
//public: se puede acceder a la propiedad desde cualquier parte del documento.
//private: solamente se puede acceder a la propiedad desde dentro de la clase.
//protected: se puede acceder a la propiedad desde la misma clase o desde una clase que la herede.
//export se utiliza para que la clase se pueda exportar. En este caso al documento 05.exportar-clase.ts.
//implements para implementar la interface declarada más abajo
/*export*/ var Camiseta = /** @class */ (function () {
    //constructor 
    function Camiseta(color, modelo, marca, talla, precio) {
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
    Camiseta.prototype.setColor = function (color) {
        this.color = color;
    };
    Camiseta.prototype.getColor = function () {
        return this.color;
    };
    return Camiseta;
}());
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
