import express  = require("express");
import cors = require('cors');
import bodyParser = require('body-parser');

let app=express();
//Middleware setup
app.use(cors())
app.use(bodyParser.json()); // for parsing application/json
//app.use(bodyParser.urlencoded({ extended: true }));
//Bad practice but were putting our data structures here.
app.get('/hello', function (req:any,res:any){
   //Bad practice, we are ignoring the request type.
   //appending cors header, so we can do cross site resource scripting.
  res.append('Access-Control-Allow-Origin','*');

  res.send("Hi!");

  console.log("I got a request!");
}) 


app.listen(9000, function(){
  console.log('Listening to port 9000');
})