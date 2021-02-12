import express, { Application, Request, Response, NextFunction } from 'express';

const app: Application = express();
const port= 443;

app.get( "/prueba", (req: Request, res: Response) => {
    res.status(200).send("Hola mundo!");
} );

app.post("/action-endpoint", (req: Request, res: Response) => {
    if (req.body["type"]==="url_verification") {
        res.send(req.body["challenge"]);
    }
});

app.listen(port, () => console.log("Express iniciado"));