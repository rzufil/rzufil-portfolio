const Experience = require("../models/experience.model.js");

// Create a new experience
exports.create = (req, res) => {
    // Validate request
    if (!req.body.company) {
        res.status(400).send({ message: "Company cannot be empty!" });
        return;
    }

    // Create an Experience
    const experience = new Experience({
        company: req.body.company,
        location: req.body.location,
        role: req.body.role,
        start_date: req.body.start_date,
        end_date: req.body.end_date,
        description: req.body.description,
        stack: req.body.stack,
        current_job: req.body.current_job
    });

    // Save Experience in the database
    experience
        .save(experience)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the Experience."
            });
        });
};

// Retrieve all experiences from the database
exports.findAll = (req, res) => {
    // Experience.find(condition)
    Experience.find({})
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving experiences."
            });
        });
};

// Find a single experience with an id
exports.findOne = (req, res) => {
    const id = req.params.id;

    Experience.findById(id)
        .then(data => {
            if (!data) {
                res.status(404).send({ message: `Experience with id ${id} was not found` });
            }
            else {
                res.send(data);
            }
        })
        .catch(err => {
            res
                .status(500)
                .send({ message: `Error retrieving Experience with id ${id}` });
        });
};

// Update an experience by the id
exports.update = (req, res) => {
    if (!req.body) {
        return res.status(400).send({
            message: "Data to update can not be empty!"
        });
    }

    const id = req.params.id;

    Experience.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
        .then(data => {
            if (!data) {
                res.status(404).send({
                    message: `Cannot update Experience with id ${id}`
                });
            }
            else {
                res.send({ message: `Experience ${id} was updated successfully` });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: `Error updating Experience with id ${id}`
            });
        });
};

// Delete an experience with the specified id
exports.delete = (req, res) => {
    const id = req.params.id;

    Experience.findByIdAndRemove(id)
        .then(data => {
            if (!data) {
                res.status(404).send({
                    message: `Cannot delete Experience with id ${id}`
                });
            }
            else {
                res.send({
                    message: "Experience was deleted successfully"
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: `Could not delete Experience with id ${id}`
            });
        });
};

// Delete all experiences from the database
exports.deleteAll = (req, res) => {
    Experience.deleteMany({})
        .then(data => {
            res.send({
                message: `${data.deletedCount} Experiences were deleted successfully`
            });
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while removing all Experiences."
            });
        });
};