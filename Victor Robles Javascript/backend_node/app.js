//LUGAR DONDE GUARDAR CONFIGURACIÓN DE EXPRESS

'use strict'

//Importar el módulo de express. require= Función de nodejs
var express = require('express')
//Importar el módulo de body-parser. require= Función de nodejs
var bodyParser = require('body-parser')

var app = express();

//cargar archivos de ruta
var project_routes = require('./routes/project')

//middlewares (método que se ejecuta antes de hacer la acción de un controlador)
app.use(bodyParser.urlencoded({extended:false}));
	//Cualquier cosa que me llegue se convertirá en JSON
app.use(bodyParser.json());

//cors

//rutas
app.use('/api', project_routes)

/*
app.get('/', (req, res) =>{
	//req: Datos que le puedo estar enviando desde el cliente la petición que yo haga
		//Con status(200) sería una respuesta exitosa de parte del servidor
	res.status(200).send(
		"<h1>Página de inicio</h1>"
	)
});


app.get('/test', (req, res) =>{
	//req: Datos que le puedo estar enviando desde el cliente la petición que yo haga
		//Con status(200) sería una respuesta exitosa de parte del servidor
	res.status(200).send({
		message: "Hola mundo desde mi API de NodeJS"
	})
});
*/

//exportar
module.exports = app;