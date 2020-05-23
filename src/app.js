const express = require('express')

const app = express()
app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use('/',require('./routes'))

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", '*');
  res.header("Access-Control-Request-Method", "*");
  res.header("Access-Control-Allow-Header", "Origin, X-Requested-With, application/json, Content-Type, Accept, token")
})

module.exports = app