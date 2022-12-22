// Fichero src/index.js

// Importamos los dos módulos de NPM necesarios para trabajar
const express = require("express");
const cors = require("cors");
const { v4: uuidv4 } = require("uuid");

// Creamos el servidor
const server = express();
server.set("view engine", "ejs");

// Configuramos el servidor
server.use(express.json({ limit: "25mb" }));
server.use(cors());

//creamos un array para las tarjetas
const cards = [];

// Crear la tarjeta en el servidor
server.post("/card", (req, res) => {
  if (
    req.body.palette === "" ||
    req.body.name === "" ||
    req.body.job === "" ||
    req.body.photo === "" ||
    req.body.phone === "" ||
    req.body.email === "" ||
    req.body.github === "" ||
    req.body.linkedin === ""
  ) {
    const errorMsg = {
      success: false,
      error: "faltan datos",
    };
    res.json(errorMsg);
  } else {
    const newCard = { id: uuidv4(), ...req.body };
    cards.push(newCard);
    console.log(newCard.id);
    const idCard = newCard.id;
    const response = {
      success: true,
      cardUrl: `//localhost:4000/card/:${idCard}`,
    };
    res.json(response);
  }
});

// A REVISAR
server.get("/card/:id", (req, res) => {
  console.log(req.params);
  const foundCards = cards.find(
    (card) => parseInt(card.id) === parseInt(req.params.id)
  );
  res.render("card", foundCards);
});

// Arrancamos el servidor en el puerto 3000
const serverPort = 4000;
server.listen(serverPort, () => {
  console.log(`Server listening at http://localhost:${serverPort}`);
});

//servidor estático
const staticServerPath = "./src/public-react";
server.use(express.static(staticServerPath));
