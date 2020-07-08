const mongoose = require("mongoose")
mongoose.connect("mongodb+srv://suman:iNKFwqIfPWCyQKSY@cluster0-ergt4.mongodb.net/SpriteEngine?retryWrites=true&w=majority", {useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false });
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  // we're connected!
  console.log("connected to database")
});

module.exports = db