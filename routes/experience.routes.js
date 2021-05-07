module.exports = (app) => {
    const experiences = require('../controllers/experience.controller.js');

    var router = require("express").Router();

    // Create a new Experience
    router.post('/', experiences.create);

    // Retrieve all Experiences
    router.get('/', experiences.findAll);

    // Retrieve a single Experience with id
    router.get('/:id', experiences.findOne);

    // Update an Experience with id
    router.put('/:id', experiences.update);

    // Delete an Experience with id
    router.delete('/:id', experiences.delete);

    app.use('/api/experiences', router);
}