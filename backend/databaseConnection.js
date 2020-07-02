const mongoose = require("mongoose")
mongoose.connect("mongodb+srv://suman:iNKFwqIfPWCyQKSY@cluster0-ergt4.mongodb.net/SpriteEngine?retryWrites=true&w=majority", {useNewUrlParser: true, useUnifiedTopology: true});
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  // we're connected!
  console.log("connected to database")
});

// const MongoClient = require('mongodb').MongoClient;
// const uri = "mongodb+srv://suman:iNKFwqIfPWCyQKSY@cluster0-ergt4.mongodb.net/SpriteEngine?retryWrites=true&w=majority";
// const client = new MongoClient(uri, { useNewUrlParser: true });

// client.connect(err => {
//     console.log(err)
//     const collection = client.db("test").collection("devices");
//     // perform actions on the collection object
//     client.close();
// })

module.exports = db