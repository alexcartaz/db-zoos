const express = require('express');
const zoosDb = require('../../db/zoos.js');

module.exports = {
	type: 'GET',
	url: 's/',
	handler: (req, res) => {
		zoosDb.get()
		  .then(zoos => {
		  	res.status(200).json(zoos);
		  })
		  .catch(err => {
		  	console.log(err);
			res.status(500).json({ error: "Could not retrieve projects." });
		  })
	}
}