// Connect to MySQL schema.sql (DATABASE: burgers_db, TABLE: burgers)
var mysql = require("mysql");

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "Activities",
    database: "burgers_db"
});

// Establish Connection
connection.connect(function(err){
    if(err){
        console.error("Connection Error: " + err.stack);
        return;
    }
    console.log("Connected as id " + connection.threadId);
});

// Export connection for ORM to use
module.exports = connection;