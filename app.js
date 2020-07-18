const express = require('express');
const path = require('path');

const { PORT = 3000, BASE_PATH } = process.env;

const app = express();

app.use(express.static(path.join(__dirname, 'public')));

app.get('/users/:id', (req, res) => {
  if (!users[req.params.id]) {
      res.send(`Такого пользователя не существует`);

      // не забудем выйти из функции
      return;
  }

  const { name, about, avatar, _id } = users[req.params.id];

  res.send(`Пользователь ${name}, ${about}, ${avatar}, ${_id}`);
});

app.listen(PORT, () => {
  console.log('Я работаю');
});
