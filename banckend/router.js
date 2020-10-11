import express from 'express';

import ItemController from './Controller/ItemController';
import ListaController from './Controller/ListaController';
import SubitemController from './Controller/SubitemController';


const app = express();

app.use(SubitemController);
app.use(ItemController);
app.use(ListaController);

module.exports = app;