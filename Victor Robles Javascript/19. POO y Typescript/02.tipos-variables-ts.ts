//string
/*Como se ha indicado que va a ser un string, cuando hacemos tsc -w *.ts 
aparecerá un error avisando de que la variable cadena no puede contener el número 12*/

let cadena: string = "V";

cadena = 12;

console.log(cadena)

//number

let numero: number = 12;

//boolean

let verdadero_falso: boolean = true;

//any (cualquier cosa)

let cualquiera: any = "hola"; /*---*/ let cualquiera2: any = 12;

//arrays (se especifica que dentro tendrá string)

var lenguajes: Array<string> = ["PHP", "JS", "CSS"];
var lenguajes2: Array<any> = ["PHP", 12, "CSS"];
var lenguajes3: Array<number> = [16, 12, 17];

let array1: string[] = ["PHP", "JS", "CSS"];
let array2: any[] = ["PHP", 12, "CSS"];
let array3: number[] = [12, 13, 14];

//dos valores (o numero o string)

let dosvalores: string | number = "Mario";

dosvalores = 12; //No daría error

//variables personalizadas:

type letrasonumeros = string | number;

let variable1: letrasonumeros = 1;
let variable2: letrasonumeros = "hola";