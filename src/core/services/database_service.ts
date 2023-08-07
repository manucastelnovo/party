import { Pool } from 'pg';
const config = {
    user:'postgres',
    host: 'localhost',
    database: 'loca_pop_party',
    password: 'password',
    port:5432,
};

export const pool = new Pool(config) 
