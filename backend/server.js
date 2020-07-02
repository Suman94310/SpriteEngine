const test = require("./test")

var express = require('express')
var app = express()
var cors = require('cors')
var dataBase = require('./databaseConnection')

app.use(cors())


app.post('/test', function (req, res) {
        res.send('hello world')
    })

app.post('/addScene', (req,res)=>{
    res.send('added Scene')
})

app.post('/addElement', (req,res)=>{
    res.send('added Scene')
})

app.listen(3300, ()=>{
    console.log("server started")
})