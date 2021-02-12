import express, { Application } from 'express';
import bodyParser from 'body-parser';
import { gestionRouter } from './routers/gestion';

const app: Application = express();
const port= process.env.PORT || 8080;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(gestionRouter);

app.listen(port, () => console.log('Express iniciado'));