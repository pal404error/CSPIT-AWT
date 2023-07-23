const express = require("express");
const bodyParser = require("body-parser")


const hostname = '127.0.0.1';
const port = 3000;
// New app using express module
const app = express();
app.use(bodyParser.urlencoded({
    extended:true
}));
  
app.get("/", function(req, res) {
  res.sendFile(__dirname + "/task1.html");
});
  
app.post("/display", function(req, res) {
  var name = req.body.name;
  var roll = req.body.roll;
  var branch = req.body.branch;
    
    
  res.send("<b>Full Name is -</b> " + name + "<br><b>Roll Number is -</b> " + roll + "<br> <b>Branch is -</b> " + branch);
});
  
app.listen(3005, function(){
  console.log(`server is running on http://${hostname}:${port}/`);
})