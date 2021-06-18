require('./db.js')  //importing database
var express = require('express');
var bodyParser = require('body-parser');
 
var cors = require('cors');


var SignUp = require("./login-signup/Signup");
var Login  =require("./login-signup/login")

const PORT = 4000;
var app = express();
app.use(cors({origin:true}));   //enabling cors for cross origin
app.use(bodyParser.json());

 
app.use("/users",SignUp);
app.use("/login",Login);
 


app.listen(PORT, () => console.log(`server is Running on port : ${PORT}`))

