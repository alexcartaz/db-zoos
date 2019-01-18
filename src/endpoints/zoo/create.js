const express = require('express');
const zoosDb = require('../../db/zoos.js');
const validators = require('../../validators/zoo/create.js');

module.exports = {
	type: 'POST',
	url: '/',
	handler: (req, res) => {
		const {name} = req.body;
		let newZoo = {
	  		name: name,
	  	}
		const newKeys = Object.keys(newZoo);
		const validations = newKeys.map(key => validators[key](newZoo));
		Promise.all(validations).then(() => {
			zoosDb.insert(newZoo)
			  .then(id => {
			  	res.status(201).json(id);
			  })
			  .catch(err => {
				res.status(500).json({ error: "There was an error while saving the new zoo to the database." });
			  });
		}).catch(err => res.status(err.statusCode || 500).json(err.stack));
	}
}
