const Degree = require("../models/degree.model.js");

// Create a new degree
exports.create = (req, res) => {
    // Validate request
    if (!req.body.course) {
        res.status(400).send({ message: "Course cannot be empty!" });
        return;
    }

    // Create a Degree
    const degree = new Degree({
        university: req.body.university,
        location: req.body.location,
        course: req.body.course,
        start_date: req.body.start_date,
        end_date: req.body.end_date,
        coursework: req.body.coursework
    });

    // Save Degree in the database
    degree
        .save(degree)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the Degree."
            });
        });
};

// Retrieve all degrees from the database
exports.findAll = (req, res) => {
    // Degree.find(condition)
    Degree.find({})
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving degrees."
            });
        });
};

// Find a single degree with an id
exports.findOne = (req, res) => {
    const id = req.params.id;

    Degree.findById(id)
        .then(data => {
            if (!data) {
                res.status(404).send({ message: `Degree with id ${id} was not found` });
            }
            else {
                res.send(data);
            }
        })
        .catch(err => {
            res
                .status(500)
                .send({ message: `Error retrieving Degree with id ${id}` });
        });
};

// Update a degree by the id
exports.update = (req, res) => {
    if (!req.body) {
        return res.status(400).send({
            message: "Data to update can not be empty!"
        });
    }

    const id = req.params.id;

    Degree.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
        .then(data => {
            if (!data) {
                res.status(404).send({
                    message: `Cannot update Degree with id ${id}`
                });
            }
            else {
                res.send({ message: `Degree ${id} was updated successfully` });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: `Error updating Degree with id ${id}`
            });
        });
};

// Delete a degree with the specified id
exports.delete = (req, res) => {
    const id = req.params.id;

    Degree.findByIdAndRemove(id)
        .then(data => {
            if (!data) {
                res.status(404).send({
                    message: `Cannot delete Degree with id ${id}`
                });
            }
            else {
                res.send({
                    message: "Degree was deleted successfully"
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: `Could not delete Degree with id ${id}`
            });
        });
};

// Delete all degrees from the database
exports.deleteAll = (req, res) => {
    Degree.deleteMany({})
        .then(data => {
            res.send({
                message: `${data.deletedCount} Degrees were deleted successfully`
            });
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while removing all Degrees."
            });
        });
};