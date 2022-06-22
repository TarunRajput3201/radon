const jwt = require("jsonwebtoken");
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
module.exports.authorise=authorise