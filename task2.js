const express = require("express");
const bodyParser = require("body-parser");

const hostname = "127.0.0.1";
const port = 3000;
// New app using express module
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/task2.html");
});

app.post("/show", function (req, res) {
  var name = req.body.name;
  var email = req.body.email;
  var passwor = req.body.passwor;
  var date = req.body.date;
  var phone = req.body.phone;
  var gender = req.body.gender;
  var multi = req.body.multi;
  var range = req.body.range;
  var rang = req.body.rang;
  var checklist = req.body.checklist;

  const response =
    "<b>Student Name is -</b> " +
    name +
    "<br><b>Student email-id is -</b> " +
    email +
    "<br><b>Student passwor is -</b> " +
    passwor +
    "<br><b>Student date is -</b> " +
    date +
    "<br><b>Phone Number is -</b> " +
    phone +
    "<br><b>Gender is -</b> " +
    gender +
    "<br><b>multi is -</b> " +
    multi +
    "<br><b>range is -</b> " +
    range +
    "<br><b>Time is -</b> " +
    rang +
    "<br><b>checklists is -</b> " +
    checklist;
  res.send(response);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});