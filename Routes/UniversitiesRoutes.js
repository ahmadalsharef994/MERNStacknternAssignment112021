const express = require('express');
const router = express.Router(); 

// import the controller file for fcuntions
const universitiesController = require('../Controllers/universitiesController.js');
// use 
router.get('/', universitiesController.baseRoute);

// create
router.post('/create', universitiesController.createUniversity);

// read all
router.get('/getUniversities', universitiesController.getUniversities);

// delete
router.delete('/delete/:id', universitiesController.deleteUniversity);

module.exports = router;