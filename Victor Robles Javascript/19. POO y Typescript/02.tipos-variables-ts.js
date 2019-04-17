//string
/*Como se ha indicado que va a ser un string, cuando hacemos tsc -w *.ts
aparecerá un error avisando de que la variable cadena no puede contener el número 12*/
var cadena = "V";
cadena = 12;
console.log(cadena);
//number
var numero = 12;
//boolean
var verdadero_falso = true;
//any (cualquier cosa)
var cualquiera = "hola"; /*---*/
var cualquiera2 = 12;
//arrays (se especifica que dentro tendrá string)
var lenguajes = ["PHP", "JS", "CSS"];
var lenguajes2 = ["PHP", 12, "CSS"];
var lenguajes3 = [16, 12, 17];
var array1 = ["PHP", "JS", "CSS"];
var array2 = ["PHP", 12, "CSS"];
var array3 = [12, 13, 14];
//dos valores (o numero o string)
var dosvalores = "Mario";
dosvalores = 12; //No daría error
var variable1 = 1;
var variable2 = "hola";
