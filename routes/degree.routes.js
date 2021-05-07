module.exports = (app) => {
    const degrees = require('../controllers/degree.controller.js');

    var router = require("express").Router();

    // Create a new Degree
    router.post('/', degrees.create);

    // Retrieve all Degrees
    router.get('/', degrees.findAll);

    // Retrieve a single Degree with id
    router.get('/:id', degrees.findOne);

    // Update a Degree with id
    router.put('/:id', degrees.update);

    // Delete a Degree with id
    router.delete('/:id', degrees.delete);

    app.use('/api/degrees', router);
}