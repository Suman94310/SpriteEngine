const mongoose = require("mongoose")

// have to import "Mixed" schema type
const Mixed = mongoose.Schema.Types.Mixed

let Schema = mongoose.Schema

let objectSchema = new Schema({
    name: String,
    rank: Number,
    position: Mixed,
    dimensions: Mixed,
    sprite: String,
})

const object = new mongoose.model("object",objectSchema)

module.exports = object