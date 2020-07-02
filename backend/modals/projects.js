// requiring mongoose
const mongoose = require("mongoose")

let Schema = mongoose.Schema

let projectSchema = new Schema({
    name: String,
    scenes: Array,
    file: Array
})

const project = new mongoose.model("project",projectSchema)

module.exports = project