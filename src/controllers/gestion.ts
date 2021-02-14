import { NextFunction, Request, Response } from 'express';

function gestion(req: Request, res: Response, next: NextFunction) {
    res.status(200).send('Hola! La versión web no está disponible.').end();
}

export { gestion };