/*Controlador de los proyectos. Controlador es una especie de clase que 
va a tener una especie de metodos relacionados con la entidad de proyectos*/

'use strict'

//Antes de crear un nuevo proyecto, hay que llamar al modelo que da el molde de proyecto
var Project = require('../models/project');

var controller = {
	home: function(req, res){
		return res.status(200).send({
			message: 'Soy la home'
		});
	},
	test: function(req, res){
		return res.status(200).send({
			message: 'Soy el método o acción test del controlador de project'
		});
	},
	//Método que permite guardar un nuevo documento en la BBDD
	saveProject: function(req, res){
		var project = new Project();

		var params = req.body;
		project.name = params.name;
		project.description = params.description;
		project.category = params.category;
		project.year = params.year;
		project.langs = params.langs;
		project.image = null;

		project.save((err, projectStored)=>{
			if(err){
				return res.status(500).send({message: 'Error al guardar el documento'});
			} 

			if(!projectStored){
				return res.status(404).send({message: 'No se ha podido guardar el proyecto'});
			} 

			return res.status(200).send({project: projectStored})
		});

		return res.status(200).send({
			project: project,
			message: "Metodo saveProject"
		});
	}

};

module.exports = controller;