import { Connection, createConnection} from 'typeorm';

var connection: Connection;

createConnection({
    type: 'postgres',
    url: process.env.DATABASE_URL || ''
}).then((con) => connection = con);

export { connection };