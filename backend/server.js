// basic requirements
var express = require('express')
var app = express()
// cors so that react could be allowed to connect to backend (without cors it won't connect)
var cors = require('cors')
app.use(cors())
// requiring dataBase
var dataBase = require('./databaseConnection')

// importing body parser
const bodyParser = require('body-parser')
app.use(bodyParser.json()) // for parsing application/json

// importing modals
const project = require('./modals/projects')
const scene = require('./modals/scenes')
var ObjectId = require('mongoose').Types.ObjectId

app.post('/test', function (req, res) {
    res.send('hello world')
})

app.post('/addScene', (req,res)=>{

    let newScene = new scene({
        name:req.body.name,
        objects:[]
    })
    project.updateOne({name:"pacman"},{$push:{scenes: newScene}},(err)=>{
        if(err) console.log(err)
    })

    res.send("Scene added")
})

app.post('/getScenes', (req,res)=>{

    project.findOne({name:"pacman"}, "scenes",(err,game)=>{
        res.send(game.scenes)
    })
    console.log("scenes sent")
})

app.post('/updateScene', (req,res)=>{
    
    project.updateOne({name:"pacman", "scenes._id":new ObjectId(req.body.id)}, {$set:{"scenes.$.name":req.body.name}}, function(error, success) {
        res.sendStatus(200)
     })
    
})

app.post('/deleteScene', (req,res)=>{
    console.log(req.body)
    project.updateOne({name:"pacman"}, {$pull:{"scenes":{"_id":new ObjectId(req.body.id)}}}, function(error, success) {
        res.sendStatus(200)
     })
    
})

app.post('/addElement', (req,res)=>{
    res.send('added Scene')
})

app.listen(3300, ()=>{
    console.log("server started")
})