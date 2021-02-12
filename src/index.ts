import express, { Application, Request, Response, NextFunction } from 'express';
import bodyParser from 'body-parser';
import https from 'https';
import http from 'http';
import axios, { AxiosRequestConfig } from 'axios';

import {WebClient, WebAPICallResult} from '@slack/web-api';

const app: Application = express();
const port= process.env.PORT || 8080;

app.use(bodyParser.json());

app.get( '/prueba', (req: Request, res: Response) => {
    res.status(200).send('Hola mundo!');
} );

app.post('/action-endpoint', (req: Request, res: Response) => {
    if (req.body['type']==='url_verification') {
        res.send(req.body['challenge']);
    }
    console.log('TIPO: ' + req.body['type']);
    console.log(req.body);
    res.status(200).end();

    if (req.body['type']==='event_callback') {
        const event = req.body['event'];
        if (event['type']==='app_mention') {
            const options: AxiosRequestConfig = {
                headers: {
                  'Content-Type': 'application/json',
                  Authorization: 'Bearer xoxb-1048445467270-1728836818599-smr69fhm9fFjSoIBichlX03x',
                }
            };
            const body = {
                channel: event['channel'],
                text: 'Hola! Aquí estoy, ' + '<@' + req.body['user'] + '>!'
            };

            const resp: Promise<any> = axios.post('https://slack.com/api/chat.postMessage', body, options);
            resp.catch((err) => console.error(err['data'])).then((resp) => console.log(resp['data']));
        }
    }
});

app.listen(port, () => console.log('Express iniciado'));