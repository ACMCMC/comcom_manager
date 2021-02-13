import { Connection, createConnection } from 'typeorm';

var connection: Connection;

createConnection({
    type: 'postgres',
    url: process.env.DATABASE_URL || '',
    ssl: { rejectUnauthorized: false },
    logging: "all",
    logger: "simple-console"
}).then((con) => {console.log("conectado a la BD"); connection = con;}).catch((err) => console.error(err));

export { connection };