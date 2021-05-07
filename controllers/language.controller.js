const Language = require("../models/language.model.js");

// Create a new language
exports.create = (req, res) => {
    // Validate request
    if (!req.body.name) {
        res.status(400).send({ message: "Name cannot be empty!" });
        return;
    }

    // Create a Language
    const language = new Language({
        name: req.body.name,
        proficiency: req.body.proficiency
    });

    // Save Language in the database
    language
        .save(language)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the Language."
            });
        });
};

// Retrieve all languages from the database
exports.findAll = (req, res) => {
    // Language.find(condition)
    Language.find({})
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving languages."
            });
        });
};

// Find a single language with an id
exports.findOne = (req, res) => {
    const id = req.params.id;

    Language.findById(id)
        .then(data => {
            if (!data) {
                res.status(404).send({ message: `Language with id ${id} was not found` });
            }
            else {
                res.send(data);
            }
        })
        .catch(err => {
            res
                .status(500)
                .send({ message: `Error retrieving Language with id ${id}` });
        });
};

// Update a language by the id
exports.update = (req, res) => {
    if (!req.body) {
        return res.status(400).send({
            message: "Data to update can not be empty!"
        });
    }

    const id = req.params.id;

    Language.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
        .then(data => {
            if (!data) {
                res.status(404).send({
                    message: `Cannot update Language with id ${id}`
                });
            }
            else {
                res.send({ message: `Language ${id} was updated successfully` });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: `Error updating Language with id ${id}`
            });
        });
};

// Delete a language with the specified id
exports.delete = (req, res) => {
    const id = req.params.id;

    Language.findByIdAndRemove(id)
        .then(data => {
            if (!data) {
                res.status(404).send({
                    message: `Cannot delete Language with id ${id}`
                });
            }
            else {
                res.send({
                    message: "Language was deleted successfully"
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: `Could not delete Language with id ${id}`
            });
        });
};

// Delete all languages from the database
exports.deleteAll = (req, res) => {
    Language.deleteMany({})
        .then(data => {
            res.send({
                message: `${data.deletedCount} Languages were deleted successfully`
            });
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while removing all Languages."
            });
        });
};