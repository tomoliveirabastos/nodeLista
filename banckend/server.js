import express from 'express';
import cors from 'cors';
import routes from './router.js';

const app = express();

app.use(express.json());
app.use(cors());
app.use(express.urlencoded());
app.use(routes);

app.listen(5000);