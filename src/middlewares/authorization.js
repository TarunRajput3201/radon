const jwt = require("jsonwebtoken");
const blog = require("../models/blogModel.js")
const authorise = function(req, res, next) {
    
    try{token = req.headers["x-Api-key"];
    if (!token) {token = req.headers["x-api-key"]}
  
   
    if (!token) {

    res.send({ status: false, msg: "token must be present" })}
  
    
    let decodedToken = jwt.verify(token, "functionup-radon");
    let userToBeModified = req.params.userId
    
    let userLoggedIn = decodedToken.userId

    
    if(userToBeModified != userLoggedIn) return res.status(403).send({status: false, msg: 'User logged is not allowed to modify the requested users data'})
else{
    next()
}}
catch(err)
{
    console.log(err.message)
    res.status(500).send(err.message)
}
}
let authoriseGetAndDelete = async function(req,res,next){
    let token = req.headers["x-api-key"]
    let decodedToken = jwt.verify(token, "functionup-radon")
    let authorId = req.query.authorId
    let userId = decodedToken.userId
    if(userId!=authorId){
      res.status(404).send({status : false, msg : "Not allowed to modify another data"})
    } 
    next()
  }
   let authorisePutAndDelete = async function(req,res,next){
    let blogId= req.params.blogId
  let data = await blog.findById(blogId)
   let authorId = data.authorId
    let token = req.headers["x-api-key"]
    let decodedToken = jwt.verify(token, "functionup-radon")
    let userId = decodedToken.userId
     if(authorId!=userId){
      res.status(403).send({status: false , msg : "Not allowed to modify another data"})
     }
     next()
  
  }
module.exports.authorise=authorise
module.exports.authorisePutAndDelete=authorisePutAndDelete
module.exports.authoriseGetAndDelete=authoriseGetAndDelete