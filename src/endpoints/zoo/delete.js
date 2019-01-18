const express = require('express');
const zoosDb = require('../../db/zoos.js');

module.exports = {
	type: 'DELETE',
	url: '/:id',
	handler: (req, res) => {
		zoosDb.get(req.params.id)
		.then(zoo => {
		  	if (zoo != undefined) {
		  		zoosDb.remove(req.params.id)
		  		.then(numRemoved => {
		  			if(numRemoved === 1){
						res.status(202).json({message: "Zoo successfully deleted."});
					}else{
						res.status(202).json({message: "Request accepted but no object deleted."});
					}
		  		})
		  		.catch(err => {
		  			res.status(500).json({ error: "The zoo could not be removed." });
		  		});
		  	}else{
		  		res.status(404).json({ message: "The zoo with the specified ID does not exist." });
		  	}
		})
		.catch(err => {
			res.status(500).json({ error: "The zoo information could not be retrieved." });
		})
	}
}
