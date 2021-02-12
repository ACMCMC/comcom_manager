import express, { Application, Request, Response, NextFunction } from 'express';
import bodyParser from 'body-parser';

const app: Application = express();
const port= process.env.PORT || 8080;

app.use(bodyParser.json());

app.get( "/prueba", (req: Request, res: Response) => {
    res.status(200).send("Hola mundo!");
} );

app.post("/action-endpoint", (req: Request, res: Response) => {
    if (req.body["type"]==="url_verification") {
        res.status(200).send(req.body["challenge"]);
    }
    console.log(req);
    res.status(200).send("No soportado");
});

app.listen(port, () => console.log("Express iniciado"));