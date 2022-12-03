// Requiring modules
const mysql = require("mysql2");
const {promisify}= require("util");
  
const config = {
    host: process.env.DB_HOST || "database",
    user: process.env.DB_USER || "root",
    password: process.env.DB_PASS || "password",
    database: process.env.DB_NAME || "crudmysql",
    port: process.env.DB_PORT || "3306"
};

const pool = mysql.createPool(config);

pool.getConnection((err, connection) => {
    if(err){
        console.log(err);
    }else{
        if(connection) connection.release();
        console.log('Base de datos conectada.');
        return;
    }
   
})
pool.query = promisify(pool.query)
module.exports = pool;