const mongoose = require("mongoose")
const objectSchema = require("./objects").objectSchema

let Schema = mongoose.Schema

let sceneSchema = new Schema({
    name: String,
    objects: [objectSchema]
})

const scene = new mongoose.model("scene",sceneSchema)

module.exports = {scene:scene, sceneSchema:sceneSchema}