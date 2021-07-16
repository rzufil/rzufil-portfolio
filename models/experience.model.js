const mongoose = require('mongoose');

const ExperienceSchema = mongoose.Schema({
    company: String,
    location: String,
    role: String,
    start_date: Date,
    end_date: Date,
    description: Array,
    stack: Array,
    current_job: Boolean
}, {
    timestamps: true
});

module.exports = mongoose.model('Experience', ExperienceSchema);