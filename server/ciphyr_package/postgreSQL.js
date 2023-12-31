// import { Pool } from 'pg';
import pkg from 'pg';
const { Pool } = pkg;

const PG_URI = process.env.SQL_DB;

// create a new pool here using the connection string above
const pool = new Pool({
  connectionString: PG_URI,
});


export default  {
  query: (text, params, callback) => {
    return pool.query(text, params, callback);
  },
};
