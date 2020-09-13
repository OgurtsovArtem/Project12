/* eslint-disable no-undef */
const router = require("express").Router();
const fsPromises = require("fs").promises;
const path = require("path");

const cardsArray = (req, res) => {
    fsPromises.readFile(path.join(__dirname, "../data/cards.json"))
    .then((data) => {
      res.send(JSON.parse(data));
    })
    .catch(err => {
        res.status(500).send({ message: `Ошибка: ${err}` });
    });
};
router.get("/cards",cardsArray);

module.exports = router;