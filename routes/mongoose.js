// getting-started.js
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/chfh');
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  // we're connected!
});
var kittySchema = mongoose.Schema({
    username: String,
    password: String
});

var Users = mongoose.model('Users', kittySchema);

var users = new Users({
    username: 'genzhu',
    password: '111111'
})

users.save( (err, result) => {
    if(err) return console.log(err);
    result.speak();
} )
