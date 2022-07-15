import mariadb from "mariadb";
import mysql from "promise-mysql";

const connection = mysql.createConnection({
    host: process.env.BD_HOST || "localhost",
    port: process.env.BD_PORT || "3306",
    database: process.env.DATABASE || "test" ,
    user: process.env.BD_USER || "root",
    password: process.env.BD_PASSWORD || ""
});

export const getConnection = () =>{
    return connection;
}

