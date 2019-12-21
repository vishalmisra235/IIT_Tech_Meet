var express = require('express');
var app = express();


var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

var urlencodedParser = bodyParser.urlencoded({ extended: false });
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
var Govt = mongoose.model("Govt", nameSchema);

app.use(express.static('public'));

app.get('/user_signup_get', function (req, res) {
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
   res.sendFile(__dirname + "/client/" +"user.html");
});

app.post('/user_login_get', urlencodedParser, function (req, res) {
   // Prepare output in JSON format
   response = {
      email: req.body.email,
      password: req.body.password
   };
   
   console.log(response);
   var MongoClient = require('mongodb').MongoClient

   MongoClient.connect('mongodb://localhost:27017/hackathon', function (err, client) {
     if (err) throw err

     var db = client.db('hackathon')

     db.collection('users').find().toArray(function (err, result) {
       if (err) throw err

       var flag = false;
       for (index = 0; index < result.length; index++) { 
         if(response.email == result[index].email && response.password == result[index].password){
            console.log("fghjk");
            res.sendFile(__dirname + "/client/" +"user_signup.html");
            flag = true;
         }
       } 
       if(!flag) res.sendFile(__dirname + "/client/" +"user.html");
       //console.log(result)
     })
   })

});


/////////////////////////////Govt //////////////////////////////////////////////////////

var govtSchema = new mongoose.Schema({
 name: String,
 oid: String,
 password: String,
 mobile: String,
 email: String
});

var Govt = mongoose.model("Govt", nameSchema);

app.get('/govt_signup_get', function (req, res) {
   // Prepare output in JSON format
   response = {
      name:req.query.name,
      oid:req.query.oid,
      password: req.query.password,
      mobile: req.query.mobile,
      email: req.query.email
   };
   var myData = new Govt(response);
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
   res.sendFile(__dirname + "/client/" +"govt.html");
});



app.post('/govt_login_get', urlencodedParser, function (req, res) {
   // Prepare output in JSON format
   response = {
      email: req.body.email,
      password: req.body.password
   };
   
   console.log(response);
   var MongoClient = require('mongodb').MongoClient

   MongoClient.connect('mongodb://localhost:27017/hackathon', function (err, client) {
     if (err) throw err

     var db = client.db('hackathon')

     db.collection('govt').find().toArray(function (err, result) {
       if (err) throw err

       var flag = false;
       for (index = 0; index < result.length; index++) { 
         if(response.email == result[index].email && response.password == result[index].password){
            console.log("fghjk");
            res.sendFile(__dirname + "/client/" +"official_signup.html");
            flag = true;
         }
       } 
       if(!flag) res.sendFile(__dirname + "/client/" +"govt.html");
       //console.log(result)
     })
   })  
});


/////////////END---Govt/////////////////////////////////////////


///////////////Contractor/////////////////////////


var contSchema = new mongoose.Schema({
 name: String,
 cid: String,
 password: String,
 mobile: String,
 email: String
});

var Cont = mongoose.model("Cont", nameSchema);

app.get('/cont_signup_get', function (req, res) {
   // Prepare output in JSON format
   response = {
      name:req.query.name,
      cid:req.query.cid,
      password: req.query.password,
      mobile: req.query.mobile,
      email: req.query.email
   };
   var myData = new Cont(response);
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
   res.sendFile(__dirname + "/client/" +"cont.html");
});



app.post('/cont_login_get', urlencodedParser, function (req, res) {
   // Prepare output in JSON format
   response = {
      email: req.body.email,
      password: req.body.password
   };
   
   console.log(response);
   var MongoClient = require('mongodb').MongoClient

   MongoClient.connect('mongodb://localhost:27017/hackathon', function (err, client) {
     if (err) throw err

     var db = client.db('hackathon')

     db.collection('cont').find().toArray(function (err, result) {
       if (err) throw err

       var flag = false;
       for (index = 0; index < result.length; index++) { 
         if(response.email == result[index].email && response.password == result[index].password){
            console.log("fghjk");
            res.sendFile(__dirname + "/client/" +"contractor_signup.html");
            flag = true;
         }
       } 
       if(!flag) res.sendFile(__dirname + "/client/" +"cont.html");
       //console.log(result)
     })
   })  
});

///////////////END-Cont////////////////////////////

var server = app.listen(8081, function () {
   var host = server.address().address
   var port = server.address().port
   
   console.log("Example app listening at http://%s:%s", host, port)
});