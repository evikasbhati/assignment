import mysql from "mysql2";
import "dotenv/config";

const db=mysql.createConnection({
    host:process.env.HOST,
    user:process.env.USER,
    database:process.env.DATABASE,
});

export default db;

