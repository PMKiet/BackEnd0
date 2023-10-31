require('dotenv').config()
const express = require('express')
const app = express()
const configViewEngine = require('./config/viewEngine')
const webRoute = require('./routes/web')
const connection = require('./config/dataBase')
const path = require('path')

let port = process.env.PORT || 8080
let hostname = process.env.HOST_NAME


app.use(express.json()) // for json
app.use(express.urlencoded({ extended: true }))

configViewEngine(app)
app.use(express.static(path.join(__dirname, 'public')))
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