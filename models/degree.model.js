const mongoose = require('mongoose');

const DegreeSchema = mongoose.Schema({
    university: String,
    location: String,
    course: String,
    start_date: Date,
    end_date: Date,
    coursework: String,
}, {
    timestamps: true
});

module.exports = mongoose.model('Degree', DegreeSchema);