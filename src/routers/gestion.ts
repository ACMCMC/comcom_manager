import express from 'express';
import { gestion } from '../controllers/gestion';

const router = express.Router();

router.get('/', () => gestion);

export { router as gestionRouter };