const dbConfig = require("../config/db.config.js");

const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

const db = {};
db.mongoose = mongoose;
db.url = dbConfig.url;
db.degree = require("./degree.model.js")(mongoose);
db.experience = require("./experience.model.js")(mongoose);
db.language = require("./language.model.js")(mongoose);
db.skill = require("./skill.model.js")(mongoose);

module.exports = db;