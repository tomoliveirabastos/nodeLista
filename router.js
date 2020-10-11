const express = require('express');
const ItemController = require('./Controller/ItemController');
const ListaController = require('./Controller/ListaController');
const SubitemController = require('./Controller/SubitemController');

const app = express();

app.use(SubitemController);
app.use(ItemController);
app.use(ListaController);

module.exports = app;