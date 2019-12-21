var express = require('express');
var app = express();
var path  = require('path');
const fs = require('fs');
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

var Govt = mongoose.model("Govt", govtSchema);

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

var Cont = mongoose.model("Cont", contSchema);

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
            res.sendFile(__dirname + "/client/" +"contractor_page.html");
            flag = true;
         }
       } 
       if(!flag) res.sendFile(__dirname + "/client/" +"cont.html");
       //console.log(result)
     })
   })  
});

///////////////END-Cont////////////////////////////


///////Assign Road to Contractor//////


var assignSchema = new mongoose.Schema({
 roadID: String,
 contID: String
});

var Assign = mongoose.model("Assign", assignSchema);

app.post('/get_assign_road', function (req, res) {
   // Prepare output in JSON format
   response = {
      roadID:req.body.roadID,
      contID: req.body.contID
   };
   var myData = new Assign(response);
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


/////End/////////////////////////////




///////Start--Display progress///////////////////////
let str1 = `<!DOCTYPE html>
<html>
<head>
   <title> Show Progress</title>
   <style>
   body {
      background-color: #c8ded1;
   }
</style>
</head>
<body>
   <h2>Most Recent progress update from Contractor</h2>
   <h4> Contractor ID : </h4>`;
let str2 = `<h4> Road ID : </h4>`;
let str3 = `<h4>Demolition and Removal : </h4>`;
let str4 = `
   <h4>Grading and Sloping : </h4>`;
let str5 = `
   <h4>Sub Base : </h4>`;
let str6 = `
   <h4>Proof Roll, undercutting and sub base repair : </h4>`;
let str7 = `
   <h4>Binder and Surface Course : </h4>`;
let str8 = `
   <h4>Installation of new asphalt surface : </h4>`;
let str9 = `
   <h4>Butt joints and transitions : </h4>`;
let str10 = `
   <h4>Final Rollup : </h4>`;
let str11 = `
   <form style="display:flex; flex-direction: row; justify-content: center; align-items: center" role="form" action = "http://127.0.0.1:8081/get_govt_survey" method = "POST" novalidate>
        <button style="" type="submit" class="btn btn-default">Govt Official Survey</button>
    </form>
</body>
</html>`;


function create_html(result1){
   const fs = require('fs');
   main_str = str1 + result1.contID + str2 + result1.roadID + str3 + result1.level1 + str4 + result1.level2 + str5 + result1.level3 + str6 + result1.level4 + str7 + result1.level5 + str8 + result1.level6 + str9 + result1.level7 + str10 + result1.level8 + str11;
   fs.writeFileSync(__dirname + "/client/" +"show_progress.html/", main_str);
}

app.post('/get_road_id', urlencodedParser, function (req, res) {
   // Prepare output in JSON format
   response = {
      road_id: req.body.roadid
   };
   
   console.log(response);
   var MongoClient = require('mongodb').MongoClient

   MongoClient.connect('mongodb://localhost:27017/hackathon', function (err, client) {
     if (err) throw err

     var db = client.db('hackathon')

     db.collection('roadinfos').find().toArray(function (err, result) {
       if (err) throw err

       var flag = false;
       for (index = 0; index < result.length; index++) { 
         if(response.road_id == result[index].roadID){
            create_html(result[index]);
            res.sendFile(__dirname + "/client/" +"show_progress.html");
            flag = true;
            break;
         }
       } 
       if(!flag) res.sendFile(__dirname + "/client/" +"govt_choose.html");
       //console.log(result)
     })
   })  
});



///////End -- displayprogress//////////////////////

///button_assign_road

app.post('/button_assign_road', urlencodedParser, function (req, res) {
   // Prepare output in JSON format
   res.sendFile(__dirname + "/client/" +"assign_road.html");
});

///

///

app.post('/button_add_official', urlencodedParser, function (req, res) {
   // Prepare output in JSON format
   res.sendFile(__dirname + "/client/" +"official_signup.html");
});

///

app.post('/button_show_complaints', urlencodedParser, function (req, res) {
   // Prepare output in JSON format
   res.sendFile(__dirname + "/client/" +"contractor_page.html");
});


///

app.post('/button_add_contractor', urlencodedParser, function (req, res) {
   // Prepare output in JSON format
   res.sendFile(__dirname + "/client/" +"contractor_signup.html");
});

///


///button_assign_road

app.post('/button_check_history', urlencodedParser, function (req, res) {
   // Prepare output in JSON format
   res.sendFile(__dirname + "/client/" +"user_page.html");
});

///

///

app.post('/button_check_profile', urlencodedParser, function (req, res) {
   // Prepare output in JSON format
   res.sendFile(__dirname + "/client/" +"user_page.html");
});

///


///

app.post('/button_new_complaint', urlencodedParser, function (req, res) {
   // Prepare output in JSON format
   res.sendFile(__dirname + "/client/" +"complaint.html");
});

///





/////Govt Survey//////


app.post('/get_govt_survey', urlencodedParser, function (req, res) {
   // Prepare output in JSON format
   res.sendFile(__dirname + "/client/" +"govt_survey.html");
});


////End Govt Survey////

/////Progress Update by Contractor/////

app.post('/button_update_progress', urlencodedParser, function (req, res) {
   // Prepare output in JSON format
   res.sendFile(__dirname + "/client/" +"progress_update.html");
});

////End Progress Update/////


//////Push road information from cont//////////////

var roadSchema = new mongoose.Schema({
 roadID: String,
 contID: String,
 level1: String,
 level2: String,
 level3: String,
 level4: String,
 level5: String,
 level6: String,
 level7: String,
 level8: String
});

var roadinfos = mongoose.model("roadinfos", roadSchema);

app.post('/get_road_information', function (req, res) {
   // Prepare output in JSON format
   console.log(req.body.end_date1.toString());
   response = {
      roadID:req.body.roadID,
      contID: req.body.contID,
      level1: "Start_date: " + req.body.start_date1.toString() + " " + "End_date: " + req.body.end_date1.toString() + " " + "Percentage: " + req.body.percentage1.toString(),
      level2: "Start_date: " + req.body.start_date2.toString() + " " + "End_date: " + req.body.end_date2.toString() + " " + "Percentage: " + req.body.percentage2.toString(),
      level3: "Start_date: " + req.body.start_date3.toString() + " " + "End_date: " + req.body.end_date3.toString() + " " + "Percentage: " + req.body.percentage3.toString(),
      level4: "Start_date: " + req.body.start_date4.toString() + " " + "End_date: " + req.body.end_date4.toString() + " " + "Percentage: " + req.body.percentage4.toString(),
      level5: "Start_date: " + req.body.start_date5.toString() + " " + "End_date: " + req.body.end_date5.toString() + " " + "Percentage: " + req.body.percentage5.toString(),
      level6: "Start_date: " + req.body.start_date6.toString() + " " + "End_date: " + req.body.end_date6.toString() + " " + "Percentage: " + req.body.percentage6.toString(),
      level7: "Start_date: " + req.body.start_date7.toString() + " " + "End_date: " + req.body.end_date7.toString() + " " + "Percentage: " + req.body.percentage7.toString(),
      level8: "Start_date: " + req.body.start_date8.toString() + " " + "End_date: " + req.body.end_date8.toString() + " " + "Percentage: " + req.body.percentage8.toString()
   };
   var myData = new roadinfos(response);
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
   res.sendFile(__dirname + "/client/" +"contractor_page.html");
});

///End of push info//////////////////


//////////Govt Official Survey//////////


var govtSchema = new mongoose.Schema({
 roadID: String,
 govtID: String,
 level1: String,
 level2: String,
 level3: String,
 level4: String,
 level5: String,
 level6: String,
 level7: String,
 level8: String
});

var govtinfos = mongoose.model("govtinfos", govtSchema);

app.post('/govt_road_information', function (req, res) {
   // Prepare output in JSON format
   console.log(req.body.end_date1.toString());
   response = {
      roadID:req.body.roadID,
      contID: req.body.govtID,
      level1: "Start_date: " + req.body.start_date1.toString() + " " + "End_date: " + req.body.end_date1.toString() + " " + "Percentage: " + req.body.percentage1.toString(),
      level2: "Start_date: " + req.body.start_date2.toString() + " " + "End_date: " + req.body.end_date2.toString() + " " + "Percentage: " + req.body.percentage2.toString(),
      level3: "Start_date: " + req.body.start_date3.toString() + " " + "End_date: " + req.body.end_date3.toString() + " " + "Percentage: " + req.body.percentage3.toString(),
      level4: "Start_date: " + req.body.start_date4.toString() + " " + "End_date: " + req.body.end_date4.toString() + " " + "Percentage: " + req.body.percentage4.toString(),
      level5: "Start_date: " + req.body.start_date5.toString() + " " + "End_date: " + req.body.end_date5.toString() + " " + "Percentage: " + req.body.percentage5.toString(),
      level6: "Start_date: " + req.body.start_date6.toString() + " " + "End_date: " + req.body.end_date6.toString() + " " + "Percentage: " + req.body.percentage6.toString(),
      level7: "Start_date: " + req.body.start_date7.toString() + " " + "End_date: " + req.body.end_date7.toString() + " " + "Percentage: " + req.body.percentage7.toString(),
      level8: "Start_date: " + req.body.start_date8.toString() + " " + "End_date: " + req.body.end_date8.toString() + " " + "Percentage: " + req.body.percentage8.toString()
   };
   var myData = new govtinfos(response);
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

////////End of govt official survey//////////


//////User Complaint Data////


var complaintSchema = new mongoose.Schema({
 userID: String,
 description: String,
 img: 
      { data: Buffer, contentType: String },
 geo_location: String
});

var complaintinfos = mongoose.model("complaintinfos", complaintSchema);

app.post('/save_user_complaint', function (req, res) {
   // Prepare output in JSON format
   response = {
      userID: req.body.userID,
      description: req.body.description,
      img: req.body.photo,
      geo_location: "23.34, 120.09"
   };
      
   var myData = new complaintinfos(response);
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
   res.sendFile(__dirname + "/client/" +"user_page.html");
});

/////End Complaint/////




var server = app.listen(8081, function () {
   var host = server.address().address
   var port = server.address().port
   
   console.log("Example app listening at http://%s:%s", host, port)
});