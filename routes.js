const express = require('express');
const routes = express.Router();

// rota home redirecionada para instrutores
routes.get('/', (req, res) => {
  return res.redirect('/instrutores');
});

// rota instrutores
routes.get('/instrutores', (req, res) => {
  return res.render('instrutores/index');
});

// rota de membros
routes.get('/membros', (req, res) => {
  return res.send('membros');
});

module.exports = routes;
