require('dotenv').config()
const express = require('express')
const app = express()
const configViewEngine = require('./config/viewEngine')
const webRoute = require('./routes/web')
const connection = require('./config/dataBase')

let port = process.env.PORT || 8080
let hostname = process.env.HOST_NAME

configViewEngine(app)
app.use('/', webRoute)

//test connection
// create the connection to database


connection.query(
     'SELECT * FROM Users u ',
     function (err, results, fields) {
          console.log('>>>results: ', results); // results contains rows returned by server
     }
);

app.listen(port, hostname, () => {
     console.log(`${hostname} ${port}`)
})