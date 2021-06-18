const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let Users = new Schema({
 name:{
     type:"string",
     required:true
 },
 branch:{
    type:"string",
    required:true
},
enrollment:{
    type:"string",
    required:true
},
dob:{
    type:"string",
    required:true
}, 
college:{
    type:"string",
    required:true
},
 address:{
    type:"string",
    required:true
},
 email:{
     type:"string",
     required:true
 },
 password:{
     type:"string",
     required:true
 }
})

const UsersModel = mongoose.model("Users",Users);
module.exports = UsersModel;