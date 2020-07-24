// requiring mongoose
const mongoose = require("mongoose")
const sceneSchema = require("./scenes").sceneSchema
// console.log(scene)
let Schema = mongoose.Schema

let projectSchema = new Schema({
    name: String,
    scenes: [sceneSchema],
    file: Array
})

const project = new mongoose.model("project",projectSchema)

module.exports = project