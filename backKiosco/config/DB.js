const mysql = require("mysql2");

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root123",
  database: "db_DrugstoreGreender"
})

connection.connect((err) => {
  if (err) throw err;
  console.log("Conectado a la DB!");
});
module.exports = { connection }