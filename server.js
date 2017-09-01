"use strict";
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
let app = express();
//Middleware setup
app.use(cors());
app.use(bodyParser.json()); // for parsing application/json
var fs = require('fs');
var youtubedl = require('youtube-dl');
var YouTube = require('youtube-node');

var youTube = new YouTube();

youTube.setKey('AIzaSyDGaBUuTGjNk4vDgQILWnvD4QZppTNH2aU');
var resulut1;

app.post('/search', function (req, res) {

  res.set('Content-Type', 'text/json');

  console.log("I got a request!",req.body.search);
  youTube.search(req.body.search, 10, function(error, result) {
    if (error) {
      console.log(error);
    }
    else {
      resulut1=JSON.stringify(result, null, 2);
      var audiosrc1 =[];
        JSON.parse(resulut1);
        res.send(resulut1);
    }
  });
 
});


  app.listen(9000, function () {
    console.log('Listening to port 9000');
});
