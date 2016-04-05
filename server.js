var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var app = express();

//Allow all requests from all domains & localhost
app.all('/*', function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With, Content-Type, Accept");
  res.header("Access-Control-Allow-Methods", "POST, GET");
  next();
});

app.use(express.static(path.join(__dirname + '/public')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

var persons = [
    "person1.jpg",
    "person2.jpg",
    "person3.jpg",
    "person4.jpg",
    "person5.jpg",
    "person6.png"
];

app.get('/persons', function(req, res) {
    console.log("GET From SERVER");
    res.send(persons);
});

app.listen(6069);
