import express, { Application, Request, Response, NextFunction } from 'express';

const app: Application = express();
const port= process.env.PORT || 8080;

app.get( "/prueba", (req: Request, res: Response) => {
    res.status(200).send("Hola mundo!");
} );

app.post("/action-endpoint", (req: Request, res: Response) => {
    if (req.body["type"]==="url_verification") {
        res.status(200).send(req.body["challenge"]);
    }
});

app.listen(port, () => console.log("Express iniciado"));