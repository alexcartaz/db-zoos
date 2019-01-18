const express = require('express');
const zoosDb = require('../../db/zoos.js');
const ValidationError = require('../validationError'); 

module.exports = {
	name: ({name}) => {
    if (name === undefined || name === '' || typeof name != "string" ) {
      throw new ValidationError('Valid Zoo name required.');
    }
    return true;
	}
};