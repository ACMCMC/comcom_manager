import express, { Application, Request, Response, NextFunction } from 'express';
import bodyParser from 'body-parser';
import http, {IncomingMessage} from 'http';

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
            const options: http.RequestOptions = {
                host: 'slack.com',
                port: 443,
                path: '/api/chat.postMessage',
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json',
                  Authorization: 'Bearer xoxb-1048445467270-1728836818599-smr69fhm9fFjSoIBichlX03x',
                }
            };
            const body = {
                channel: req.body['channel'],
                text: 'Hola! Aquí estoy, ' + '<@' + req.body['user'] + '>!'
            }
            const request_msg = http.request(options, (response: IncomingMessage) => {console.log(response)});
            request_msg.write(JSON.stringify(body));
            request_msg.on('error', (err: Error) => {console.error(err)});
            request_msg.end();
        }
    }
});

app.listen(port, () => console.log('Express iniciado'));