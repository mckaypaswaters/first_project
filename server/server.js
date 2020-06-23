require("dotenv").config();
const express = require("express");
const { SERVER_PORT, DBHOST, USER, PASSWORD, DATABASE } = process.env;
const app = express();
const userCtrl = require("./controllers/usersController");
const mysql = require("mysql");
const connection = mysql.createConnection({
    host: DBHOST,
    user: USER,
    password: PASSWORD,
    database: DATABASE,
});

connection.connect(function (err) {
    if (err) {
        console.error("error connecting: " + err.stack);
        return;
    }
    console.log("connected as id " + connection.threadId);
});

app.use(express.json());

app.get("/api/users", userCtrl.getAllUsers);

app.get("/", function (req, res) {
    connection.query("select * from users", function (error, results, fields) {
        if (error) throw error;
        res.end(JSON.stringify(results));
    });
});

app.listen(SERVER_PORT, function () {
    console.log(`${SERVER_PORT} days until Halo 3 comes to PC.`);
});
