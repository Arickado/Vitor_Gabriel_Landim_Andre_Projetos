const mysql = require("mysql");
const connect = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "projeto_recode",
});

module.exports = connect