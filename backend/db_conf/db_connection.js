const mysql = require("mysql");

var connection = mysql.createConnection({
  host: "localhost",
  user: "nayan",
  password: "nayan",
  database: "DTS",
  idle_connection: 10,
  max_connection: 100,
});

connection.connect((err) => {
  if (err) {
    console.log(">>> error connecting to database...");
    return;
  }
  console.log(">>> connected as id " + connection.threadId);
});

module.exports = connection;
