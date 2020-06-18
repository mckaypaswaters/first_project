require("dotenv").config();
const express = require("express");
// const massive = require('massive')
const { SERVER_PORT, HOST, USER, PASSWORD, DATABASE } = process.env;
const app = express();
const mysql = require("mysql");
const connection = mysql.createConnection({
    host: HOST,
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

app.listen(SERVER_PORT, function () {
    console.log(`${SERVER_PORT} days until Halo 3 comes to PC.`);
});
