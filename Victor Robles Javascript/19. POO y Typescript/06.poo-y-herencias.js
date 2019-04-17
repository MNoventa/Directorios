//Decorador. Añade a una clase una método nuevo
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
function estampar(logo) {
    return function (target) {
        target.prototype.estampacion = function () {
            console.log("Camiseta estampada con el logo: " + logo);
        };
    };
}
//Clase padre
; //Se le asigna un decorador
var Vehiculo = /** @class */ (function () {
    function Vehiculo(motor, rendimiento, precio) {
        this.motor = motor;
        this.rendimiento = rendimiento;
        this.precio = precio;
    }
    Vehiculo.prototype.setMotor = function (motor) {
        this.motor = motor;
    };
    Vehiculo.prototype.getMotor = function () {
        return this.motor;
    };
    return Vehiculo;
}());
//Clase hija
var Coche = /** @class */ (function (_super) {
    __extends(Coche, _super);
    function Coche() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Coche.prototype.setColor = function (color) {
        this.color = color;
    };
    Coche.prototype.getColor = function () {
        return this.color;
    };
    return Coche;
}(Vehiculo));
var seat = new Coche("bajo", "regular", 2000);
console.log(seat);
seat.estampacion();
