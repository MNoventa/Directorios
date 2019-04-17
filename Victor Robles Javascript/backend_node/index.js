/*
DEPENDENCIAS EN package.json

- express: Framework para trabajar con HTTP (GET, POST, etc). Descargado con comando: npm install express --save
- body-parser: Convertir las peticiones que hago al backend a un objeto json usable por javascript. Cuando se envian los datos 
por POST y cuando recibe la petición me lo convierte en json.
- connect-multiparty: Permite subir archivos a mi backend y poder trabajar con la propiedad/variable FILES. Poder recoger ficheros y guardarlos en 
una carpeta de mi servidor. Importante si queremos guardar imagenes, etc.
- mongoose: Libreria (ORM) que permite trabajar con MongoDB. Permite crear modelos, entidades, etc.
- nodemon: Permite que cuando se ejecute mi servidor de nodejs, cada vez que se hace un cambio en el código se guarde y refresque automaticamente.
*/

'use strict'

//Cargar configuración de express
var app = require('./app');
//Indicar puerto del servidor
var port = 3700;
//Importar el módulo de mongoose. require= Función de nodejs
var mongoose = require('mongoose');
//Preparar la conexión con la base de datos
mongoose.Promise = global.Promise;
//Hacer conexión con la url de mi BBDD
mongoose.connect('mongodb://localhost:27017/portafolio')
//Comprobar si me he conectado a la BBDD
		.then(()=>{
			console.log("Conexión a la base de datos establecida con éxito");

			//Creación del servidor
			app.listen(port, () => {
				console.log("Servidor corriendo correctamente en la url: localhost: 3700");
			});
		})
		.catch(err => console.log(err));
