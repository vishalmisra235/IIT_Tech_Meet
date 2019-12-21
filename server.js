var express = require('express');
var app = express();

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
   console.log(response);
   res.sendFile(__dirname + "/client/" +"user_login.html");
})

var server = app.listen(8081, function () {
   var host = server.address().address
   var port = server.address().port
   
   console.log("Example app listening at http://%s:%s", host, port)
})