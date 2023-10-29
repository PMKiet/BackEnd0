require('dotenv').config()
const express = require('express')
const app = express()
const configViewEngine = require('./config/viewEngine')
const webRoute = require('./routes/web')

let port = process.env.PORT || 8080
let hostname = process.env.HOST_NAME

configViewEngine(app)
app.use('/', webRoute)

app.listen(port, hostname, () => {
     console.log(`${hostname} ${port}`)
})