import pkg from "pg";
import dotenv from 'dotenv';
const { Pool } = pkg;

dotenv.config();

const pool = new Pool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    database: process.env.DB_DATABASE,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT
});

pool.on('connect', () => {
    console.log('Connected to the database');
});

pool.on('error', (err) => {
    console.error('Database connection error:', err);
});

export default pool;

