import pg from 'pg';

const pool = new pg.Pool({
  user: process.env.USER,
  password: process.env.PASSWORD,
  connectionString: process.env.DATABASE_URL,
  ssl: process.env.PGSSLMODE && { rejectUnauthorized: false }
});

export default pool;
