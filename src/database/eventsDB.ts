import { Connection, createConnection} from 'typeorm';

var connection: Connection;

createConnection({
    type: 'postgres',
    url: process.env.DATABASE_URL || '',
    ssl: {rejectUnauthorized: false}
}).then((con) => connection = con).catch((err) => console.error(err));

export { connection };