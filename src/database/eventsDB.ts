import { Connection, createConnection } from 'typeorm';
import { Event } from '../entity/Event';

var connection: Connection;

createConnection({
    type: 'postgres',
    url: process.env.DATABASE_URL || '',
    ssl: { rejectUnauthorized: false },
    logging: [],
    entities: [ Event ],
    dropSchema: true
}).then((con) => {console.log("Conectado a la BD"); connection = con;}).catch((err) => console.error(err));

export { connection };