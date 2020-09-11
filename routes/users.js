/* eslint-disable no-undef */
const router = require("express").Router(); // создали роутер
const fsPromises = require("fs").promises;
const path = require("path");

const usersName = (req, res) => {
    // res.send(fileReader)
    fsPromises.readFile(path.join(__dirname, "../data/users.json"))
        .then((data) => {
            const users = JSON.parse(data);
            res.send(users);
        })
        .catch(err => {
            res.status(500).send(err);
        });
};
const searchUser = (req, res) => {
    const { id } = req.params;
    fsPromises.readFile(path.join(__dirname, "../data/users.json"))
      .then((data) => {
        const users = JSON.parse(data);
        const user = users.find(item => item._id === id);

        if (user) {
          res.send(user);
          return;
        }
        res.status(404).send({ message: "Такого пользователя нет" });
      })
      .catch((err) => {
        res.status(500).send({massage:`Ошибка: ${err}`});
      });
  };

router.get("/users/:id", searchUser);
router.get("/users", usersName);

module.exports = router; // экспортировали роутер
