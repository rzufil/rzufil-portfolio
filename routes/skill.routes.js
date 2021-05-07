module.exports = (app) => {
    const skills = require('../controllers/skill.controller.js');

    var router = require("express").Router();

    // Create a new Skill
    router.post('/', skills.create);

    // Retrieve all Skills
    router.get('/', skills.findAll);

    // Retrieve a single Skill with id
    router.get('/:id', skills.findOne);

    // Update a Skill with id
    router.put('/:id', skills.update);

    // Delete a Skill with id
    router.delete('/:id', skills.delete);

    app.use('/api/skills', router);
}