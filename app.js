
// eslint-disable-next-line no-undef
const express = require("express");
// eslint-disable-next-line no-undef
const path = require("path");
// eslint-disable-next-line no-undef
const routerUsers = require("./routes/users");
// eslint-disable-next-line no-undef
const routerCards = require("./routes/cards");

// eslint-disable-next-line no-undef
const { PORT = 3000 } = process.env;

const app = express();

// eslint-disable-next-line no-undef
app.use(express.static(path.join(__dirname, "/public/src")));

app.use("/", routerUsers);
app.use("/", routerCards);
app.use("*", (req, res) => {
  res.status(404).send({ message: "Запрашиваемый ресурс не найден" });
});

app.listen(PORT);