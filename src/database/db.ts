/* import pg from "pg";

const { Pool } = pg;

const connection = new Pool({
    host: "localhost",
    port: 5432,
    user: "postgres", 
    password: "postgres",
    database: "films"
});

export default connection; */

import pkg from '@prisma/client'

const { PrismaClient } = pkg;
const prisma = new PrismaClient();

export default prisma;