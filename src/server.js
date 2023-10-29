require('dotenv').config()
const express = require('express')
const app = express()
const configViewEngine = require('./config/viewEngine')
const webRoute = require('./routes/web')
// get the client
const mysql = require('mysql2');

let port = process.env.PORT || 8080
let hostname = process.env.HOST_NAME

configViewEngine(app)
app.use('/', webRoute)

//test connection
// create the connection to database
const connection = mysql.createConnection({
     host: 'localhost',
     port: 3307,
     user: 'root',
     password: '123456',
     database: 'minhkiet'
});

connection.query(
     'SELECT * FROM Users u ',
     function (err, results, fields) {
          console.log('>>>results: ', results); // results contains rows returned by server
          console.log('>>>fields: ', fields); // fields contains extra meta data about results, if available
     }
);

app.listen(port, hostname, () => {
     console.log(`${hostname} ${port}`)
})