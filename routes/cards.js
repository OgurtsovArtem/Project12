const router = require('express').Router();
const fsPromises = require('fs').promises;
const path = require('path');

const cardsArray = (req, res) => {
    fsPromises.readFile(path.join(__dirname, '../data/cards.json'))
    .then((data) => {
        const users = JSON.parse(data);
        res.send(users);
    })
    .catch(err => {
        res.send(err);
    });
};
router.get('/cards',cardsArray);

module.exports = router;