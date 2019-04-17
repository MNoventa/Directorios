/*Modelo representa un documento de una colección de la BBDD. Cuando se crea un 
modelo, se crea un nuevo documento en la base de datos.

El archivo se llama project porque el tipo de entidad que guarda la colección 
en la BBDD se llama projects*/

'use strict'

//Para crear una entidad/modelo se debe utilizar mongoose
var mongoose = require('mongoose');
//Definir esquema de un modelo
var Schema = mongoose.Schema;
/*Crear esquema de project. Molde el cual utilizaremos para ir creando 
nuevos documentos del tipo project*/
var ProjectSchema = Schema({
	name: String,
	descripcion: String,
	category: String,
	year: Number,
	langs: String,
	image: String
});

module.exports = mongoose.model('Project', ProjectSchema);
/*La colección/entidad en la BBDD se llama projects, pero mongoose 
pone en minusculas Project y pone en plural el nombre del modelo*/