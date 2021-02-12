import express, { Application } from 'express';
import bodyParser from 'body-parser';
import { gestionRouter } from './routers/gestion';
import slackService from './services/slackService';
import dotEnv from 'dotenv';

const port: number = Number(process.env.PORT) || 8080;

// Configuración de variables de entorno
dotEnv.config();

// Configuración de Express

const app: Application = express();

app.use('/slack', slackService.getSlackEvents().requestListener()) // Para el servidor de Slack

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/gestion', gestionRouter);

app.listen(port, () => console.log('Express iniciado'));