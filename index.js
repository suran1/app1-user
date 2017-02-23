var express = require('express');
var bodyparser = require('body-parser');
var randomId = require('random-id');
var date = require('date-format-utils');
var users = require('./user');




var app = express();

app.use(bodyparser.json());
console.log(randomId(16, "A0"));
console.log(date.formatDate(new Date()));

app.get('/', function (req, res){

  res.json(users);
});


app.post('/users', function (req, res){
  var id;
  var newId = randomId(16, "A0");
  var newDate = date.formatDate(new Date());
  var updateuser = req.body;
  updateuser.id = newId;
  updateuser.date = newDate;

  users.push(updateuser);
  res.status(200).json(updateuser);

   });

   app.get('/users/:id', function (req, res){

var getUser = users.filter(function(element, index, origArray){
  return element.id === req.params.id;
  console.log(req.params.id);
});
res.status(200).json(getUser);

   });





app.listen(3000, function (){
  console.log('Server is runnnig port on 3000 ....');

});
