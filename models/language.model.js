const mongoose = require('mongoose');

const LanguageSchema = mongoose.Schema({
    name: String,
    proficiency: String
}, {
    timestamps: true
});

module.exports = mongoose.model('Language', LanguageSchema);