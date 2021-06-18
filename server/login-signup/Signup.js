var express = require("express");
var router = express.Router();

var UsersModel = require('../models/signupModel');


var objectID = require("mongoose").Types.objectID;

router.get('/',(req,res) =>{
    UsersModel.find((err,docs) =>{
        if(!err) res.send(docs)
        else console.log("Error while retrieving all records")
    })
})

router.post('/',(req,res) => {

    var newUser = new UsersModel({
        name : req.body.name,
        branch : req.body.branch,
        enrollment : req.body.enrollment,
        dob : req.body.dob,
        college : req.body.college,
        address : req.body.address,
        email: req.body.email,
        password : req.body.password
    })
    newUser.save((err,docs) => {
        console.log(docs)
        if(!err) res.send(docs)
        else console.log("Error in  user Registration ")
    })
})


//update
router.put("/:id",(req,res)=>{
    
    var updatedRecord = {
            name : req.body.name,
            branch : req.body.branch,
            enrollment : req.body.enrollment,
            dob : req.body.dob,
            college : req.body.college,
            address : req.body.address,
            email: req.body.email,
    }

    UsersModel.findByIdAndUpdate(req.params.id,{$set:updatedRecord},{new:true},(err,docs)=>{
        if(!err) res.send(docs)
        else console.log("error while updating a record")
    })
    })

//delete
 router.delete("/:id",(req,res)=>{
     UsersModel.findByIdAndRemove(req.params.id,(err,docs)=>{
         if(!err) res.send(docs)
         else console.log("error while deleting the record")
     })
 })


 //find by id 
 router.get("/:id",(req,res)=>{
     UsersModel.findById(req.params.id,(err,docs)=>{
         if(!err)  res.send(docs)
         else console.log(`Error while fetching record with id :${id}`)
     })
 })


module.exports = router