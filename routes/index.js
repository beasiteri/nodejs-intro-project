const express = require('express');
const router = express.Router();

router.post('/user', (req, res, next) => {
    const body = req.body;
    console.log(body);

    res.json({
        confirmation: 'success',
        data: body
    });
});

router.get('/', (req, res, next) => {
    res.render('home', null);
});

router.get('/query', (req, res, next) => {
    // ex. localhost:3000/query?name=dan&occupation=teacher
    const name = req.query.name;
    const occupation = req.query.occupation;

    const data = {
        name: name,
        occupation: occupation
    };

    res.render('profile', data);
});

router.get('/:username/:id', (req, res, next) => {
    // Extracting dynamic data from request
    const username = req.params.username;
    const id = req.params.id;

    res.json({
        username: username,
        id: id
    });
});



module.exports = router;