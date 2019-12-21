var express = require('express');
var app = express();


var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

var mongoose = require("mongoose");
mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost:27017/hackathon");

var nameSchema = new mongoose.Schema({
 name: String,
 uid: String,
 password: String,
 mobile: String,
 email: String
});

var User = mongoose.model("User", nameSchema);

app.use(express.static('public'));

app.get('/process_get', function (req, res) {
   // Prepare output in JSON format
   response = {
      name:req.query.name,
      uid:req.query.uid,
      password: req.query.password,
      mobile: req.query.mobile,
      email: req.query.email
   };
   var myData = new User(response);
   myData.save()
   .then(item => {
   	res.send("item saved");
   	console.log("item save");
   })
   .catch(err => {
   	res.status(400).send("unable");
   	console.log("errorrr");
   });
   console.log(response);
   res.sendFile(__dirname + "/client/" +"user_login.html");
});

var server = app.listen(8081, function () {
   var host = server.address().address
   var port = server.address().port
   
   console.log("Example app listening at http://%s:%s", host, port)
})
