const express = require('express');
const zoosDb = require('../../db/zoos.js');

module.exports = {
	type: 'GET',
	url: '/:id',
	handler: (req, res) => {
		const { id } = req.params;
		zoosDb.get(id)
		.then(zoo => {
		  	if(zoo != undefined){
		  		res.status(200).json(zoo);
		  	}else{
		  		res.status(404).json({ error: "Zoo not found."});
		  	}
		})
		.catch(err => {
		  	console.log(err);
			res.status(500).json({ error: "Could not retrieve zoo." });
		});
	}
}