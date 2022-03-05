const express = require('express');
const path = require('path');
const hoganMiddleware = require('hogan-middleware');
const port = 3000;

const app = express();

// Set the views directory
app.set('views', path.join(__dirname, 'views'));
// Set the view engine to be mustache
app.set('view engine', 'mustache');
// Specify the hoggle middleware for the express configuration
app.engine('mustache', hoganMiddleware.__express);
// Use public directory for static assets
app.use(express.static(path.join(__dirname, 'public')));

// HTTP Get request - send back a string
/* app.get('/', (req, res, next) => {
    res.send('hello world');
}); */

// HTTP Get request - send back a json file
/* app.get('/json', (req, res, next) => {
    const data = {
        greeting: 'hello'
    }
    res.send(data);
}); */

app.get('/', (req, res, next) => {
    res.render('home', null);
});

// Listen on port 3000
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});