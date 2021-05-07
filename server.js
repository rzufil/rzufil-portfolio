const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');
const dotenv = require('dotenv').config();
const path = require('path');

// Create express app
const app = express();

// Use cors
app.use(cors());

// Parse application/x-www-form-urlencoded requests
app.use(bodyParser.urlencoded({ extended: true }));

// Parse application/json requests
app.use(bodyParser.json());

// Log
app.use(morgan('tiny'));

// Require Experiences routes
require('./routes/experience.routes.js')(app);

// Require Degrees routes
require('./routes/degree.routes.js')(app);

// Require Skills routes
require('./routes/skill.routes.js')(app);

// Require Languages routes
require('./routes/language.routes.js')(app);

// Handle production
if (process.env.NODE_ENV === 'production') {
    // Static folder
    app.use(express.static('client/dist'));
    // Handle SPA
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'dist', 'index.html'));
    })
}

// Listen for requests
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});

// Database config
const dbConfig = require('./config/db.config.js');
const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

// Connecting to the database
mongoose.connect(dbConfig.mongoUri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('Successfully connected to the database');
}).catch(err => {
    console.log('Could not connect to the database. Exiting now...', err);
    process.exit();
});