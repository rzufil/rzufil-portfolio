const mongoose = require('mongoose');

const SkillSchema = mongoose.Schema({
    name: String,
    level: Number
}, {
    timestamps: true
});

module.exports = mongoose.model('Skill', SkillSchema);