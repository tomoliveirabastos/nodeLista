const cors = require('cors');
const express = require('express');
const routes = require('./router');

const PORT = process.env.PORT || 5000;

const app = express();

app.use(express.json());
app.use(cors());
app.use(express.urlencoded());
app.use(routes);

app.listen(PORT);