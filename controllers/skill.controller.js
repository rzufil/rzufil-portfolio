const Skill = require("../models/skill.model.js");

// Create a new skill
exports.create = (req, res) => {
    // Validate request
    if (!req.body.name) {
        res.status(400).send({ message: "Name cannot be empty!" });
        return;
    }

    // Create a Skill
    const skill = new Skill({
        name: req.body.name,
        level: req.body.level
    });

    // Save Skill in the database
    skill
        .save(skill)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the Skill."
            });
        });
};

// Retrieve all skills from the database
exports.findAll = (req, res) => {
    // Skill.find(condition)
    Skill.find({})
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving skills."
            });
        });
};

// Find a single skill with an id
exports.findOne = (req, res) => {
    const id = req.params.id;

    Skill.findById(id)
        .then(data => {
            if (!data) {
                res.status(404).send({ message: `Skill with id ${id} was not found` });
            }
            else {
                res.send(data);
            }
        })
        .catch(err => {
            res
                .status(500)
                .send({ message: `Error retrieving Skill with id ${id}` });
        });
};

// Update a skill by the id
exports.update = (req, res) => {
    if (!req.body) {
        return res.status(400).send({
            message: "Data to update can not be empty!"
        });
    }

    const id = req.params.id;

    Skill.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
        .then(data => {
            if (!data) {
                res.status(404).send({
                    message: `Cannot update Skill with id ${id}`
                });
            }
            else {
                res.send({ message: `Skill ${id} was updated successfully` });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: `Error updating Skill with id ${id}`
            });
        });
};

// Delete a skill with the specified id
exports.delete = (req, res) => {
    const id = req.params.id;

    Skill.findByIdAndRemove(id)
        .then(data => {
            if (!data) {
                res.status(404).send({
                    message: `Cannot delete Skill with id ${id}`
                });
            }
            else {
                res.send({
                    message: "Skill was deleted successfully"
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: `Could not delete Skill with id ${id}`
            });
        });
};

// Delete all skills from the database
exports.deleteAll = (req, res) => {
    Skill.deleteMany({})
        .then(data => {
            res.send({
                message: `${data.deletedCount} Skills were deleted successfully`
            });
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while removing all Skills."
            });
        });
};