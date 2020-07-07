const mongoose = require("mongoose")
let Schema = mongoose.Schema

let sceneSchema = new Schema({
    name: String,
    objects: Array
})

const scene = new mongoose.model("scene",sceneSchema)

module.exports = scene