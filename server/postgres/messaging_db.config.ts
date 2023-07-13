import { Pool } from 'pg';

const pool = new Pool({
  user: 'andiealdana',            // replace with your PostgreSQL username
  host: 'localhost',             // replace with your PostgreSQL server address
  database: 'messaging_db',      // replace with your PostgreSQL database name
  password: '',                 // replace with your PostgreSQL password
  port: 5432,                    // replace with your PostgreSQL port
});

export default pool;