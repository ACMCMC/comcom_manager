import express, { Application, Request, Response, NextFunction } from 'express';

const app: Application = express();
const port= 8080;

app.get( "/prueba", (req: Request, res: Response) => {
    res.status(200).send("Hola mundo!");
} );

app.listen(port, () => console.log("Express iniciado"));