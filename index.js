const express = require('express');
const path = require('path');
const hoganMiddleware = require('hogan-middleware');
const port = 3000;
// Import the routes
const indexRouter = require('./routes/index');

const app = express();

// Set the views directory
app.set('views', path.join(__dirname, 'views'));
// Set the view engine to be mustache
app.set('view engine', 'mustache');
// Specify the hoggle middleware for the express configuration
app.engine('mustache', hoganMiddleware.__express);

// Use public directory for static assets
app.use(express.static(path.join(__dirname, 'public')));

// Pass the entire routes
app.use('/', indexRouter);

// Listen on port 3000
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});