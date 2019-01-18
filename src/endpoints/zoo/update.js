const express = require('express');
const zoosDb = require('../../db/zoos.js');
const validators = require('../../validators/zoo/update.js');

module.exports = {
	type: 'PUT',
	url: '/:id',
	handler: (req, res) => {
		const {name} = req.body;
		const {id} = req.params;
		let modifiedZoo = {
	  		name: name,
	  	}
		const changedKeys = Object.keys(modifiedZoo);
		const validations = changedKeys.map(key => validators[key](modifiedZoo));
		Promise.all(validations).then(() => {
			zoosDb.update(id, modifiedZoo)
				.then(response => {
					if(response === null){
						res.status(404).json({message: "Zoo not found."});
					}else{
						res.status(200).json(response);
					}
				})
				.catch(err => {
					res.status(500).json({ error: "The zoo information could not be retrieved." });
				})
		}).catch(err => res.status(err.statusCode || 500).json(err.stack));
	
	}
}