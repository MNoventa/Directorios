"use strict";
/* Se importa clase de otro archivo. Para eso, en la clase que queramos importar deberá de tener
en su comienzo la palabra reservada export */
exports.__esModule = true;
var _04_poo_y_interfaces_1 = require("./04.poo-y-interfaces");
var Main = /** @class */ (function () {
    function Main() {
        console.log("Aplicación JS cargada!!");
    }
    Main.prototype.getCamiseta = function () {
        return new _04_poo_y_interfaces_1.Camiseta("Rojo", "asdsada", "ijasjds", "ioasjd", 12);
    };
    return Main;
}());
var main = new Main();
