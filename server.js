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

app.use(express.static('public'));

app.post('/user_signup_get', urlencodedParser, function (req, res) {
   // Prepare output in JSON format
   response = {
      name:req.body.name,
      uid:req.body.uid,
      password: req.body.password,
      mobile: req.body.mobile,
      email: req.body.email
   };
   var myData = new User(response);
   myData.save()
   .then(item => {
   	//res.send("item saved");
      res.sendFile(__dirname + "/client/" +"user.html");
   	console.log("item save");
   })
   .catch(err => {
   	// res.status(400).send("unable");
   	console.log("errorrr");
   });
   console.log(response);
   
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
            res.sendFile(__dirname + "/client/" +"user_page.html");
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

app.post('/govt_signup_get', urlencodedParser, function (req, res) {
   // Prepare output in JSON format
   response = {
      name:req.body.name,
      oid:req.body.oid,
      password: req.body.password,
      mobile: req.body.mobile,
      email: req.body.email
   };
   var myData = new Govt(response);
   myData.save()
   .then(item => {
      //res.send("item saved");
      console.log("item save");
   })
   .catch(err => {
      res.status(400).send("unable");
      console.log("errorrr");
   });
   console.log(response);
   res.sendFile(__dirname + "/client/" +"govt_choose.html");
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

     db.collection('govts').find().toArray(function (err, result) {
       if (err) throw err

       var flag = false;
       for (index = 0; index < result.length; index++) { 
         if(response.email == result[index].email && response.password == result[index].password){
            console.log("fghjk");
            res.sendFile(__dirname + "/client/" +"govt_choose.html");
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

app.post('/cont_signup_get', function (req, res) {
   // Prepare output in JSON format
   response = {
      name:req.body.name,
      cid:req.body.cid,
      password: req.body.password,
      mobile: req.body.mobile,
      email: req.body.email
   };
   var myData = new Cont(response);
   myData.save()
   .then(item => {
      //res.send("item saved");
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

     db.collection('conts').find().toArray(function (err, result) {
       if (err) throw err

       var flag = false;
       for (index = 0; index < result.length; index++) { 
         console.log("df");
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