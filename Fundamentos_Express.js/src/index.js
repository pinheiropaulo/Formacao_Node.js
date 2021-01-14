const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("Ola Mundo");
});

app.get("/ola/:nome/:sobrenome", (req, res) => {
  let nome = req.params.nome;
  let sobrenome = req.params.sobrenome;
  let idade = req.query["idade"];
  res.send(`Meu é ${nome} ${sobrenome} e eu tenho ${idade} anos de idade`);
});

app.listen(3333, () => {
  console.log(`Server start http://localhost:3333`);
});
