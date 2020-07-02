const mongoose = require("mongoose")
let Schema = mongoose.Schema

let usersSchema = new Schema({
    userName: String,
    password: String
})

const user = new mongoose.model("user",usersSchema)

export default user