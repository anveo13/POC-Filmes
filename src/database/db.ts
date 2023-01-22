import pg from "pg";

const { Pool } = pg;

const connection = new Pool({
    host: "localhost",
    port: 5432,
    user: "postgres", 
    password: "postegres",
    database: "films"
});

export default connection;