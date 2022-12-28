// Fichero src/index.js

// Importamos los dos módulos de NPM necesarios para trabajar
const express = require('express');
const cors = require('cors');
const { v4: uuidv4 } = require('uuid');
const Database = require('better-sqlite3');

//base de datos
const db = new Database('./src/db/database.db', { verbose: console.log });

// Creamos el servidor
const server = express();
server.set('view engine', 'ejs');

// Configuramos el servidor
server.use(express.json({ limit: '25mb' }));
server.use(cors());

//creamos un array para las tarjetas
const cards = [];

// Crear la tarjeta en el servidor
server.post('/card', (req, res) => {
  if (
    req.body.palette === '' ||
    req.body.name === '' ||
    req.body.job === '' ||
    req.body.photo === '' ||
    req.body.phone === '' ||
    req.body.email === '' ||
    req.body.github === '' ||
    req.body.linkedin === ''
  ) {
    const errorMsg = {
      success: false,
      error: 'faltan datos',
    };
    res.json(errorMsg);
  } else {
    const newCard = { id: uuidv4(), ...req.body };
    cards.push(newCard);
    // console.log(cards);
    // console.log(newCard.id);
    const queryInsert = db.prepare('INSERT INTO cards(id, palette, name, job, photo, phone, email, github, linkedin) VALUES (?,?,?,?,?,?,?,?,?)');
    const idCard = newCard.id;
    const result = queryInsert.run(newCard.id, newCard.palette, newCard.name, newCard.job, newCard.photo, newCard.phone, newCard.email, newCard.github, newCard.linkedin)
    const response = {
      success: true,
      cardURL: `//localhost:4000/card/${idCard}`,
    };
    // console.log(response);
    res.json(response);
  }
});

//Rutas dinámicas 
server.get('/card/:id', (req, res) => {
  const query = db.prepare('SELECT * FROM cards WHERE id=?');
  const foundCards = query.get(req.params.id);
  console.log(foundCards);
  res.render('card', foundCards);
});

// Arrancamos el servidor en el puerto 3000
const serverPort = 4000;
server.listen(serverPort, () => {
  console.log(`Server listening at http://localhost:${serverPort}`);
});

//servidor estático
const staticServerPath = './src/public-react';
server.use(express.static(staticServerPath));
//servidor estático para el css
const staticServerCssPath = './src/public-css';
server.use(express.static(staticServerCssPath));
