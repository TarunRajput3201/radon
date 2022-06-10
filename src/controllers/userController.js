const { append } = require("express/lib/response")
const UserModel= require("../models/userModel")




const basicCode= async function(req, res) {
    let tokenDataInHeaders= req.headers.token
    console.log(tokenDataInHeaders)

    console.log( "HEADER DATA ABOVE")
    console.log( "hey man, congrats you have reached the Handler")
    res.send({ msg: "This is coming from controller (handler)"})
    }

   const router1= async function(req,res) {
    console.log( "This is router 1")
    res.send("This is  router 1")
   }

   const router2= async function(req,res) {
    console.log( "This is router 2")
    res.send("This is  router 2")
   }
   const router3= async function(req,res) {
    console.log( "This is router 3")
    res.send("This is  router 3")
   }
   const router4= async function(req,res) {
    console.log( "This is router 4")
    res.send("This is  router 4")
   }
module.exports.router1=router1
module.exports.router2=router2
module.exports.router3=router3
module.exports.router4=router4















const createUser= async function (req, res) {
    let data= req.body
    let savedData= await UserModel.create(data)
    res.send({msg: savedData})
}

const getUsersData= async function (req, res) {
    let allUsers= await UserModel.find()
    res.send({msg: allUsers})
}

module.exports.createUser= createUser
module.exports.getUsersData= getUsersData
module.exports.basicCode= basicCode