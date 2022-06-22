const jwt = require("jsonwebtoken");

const authenticate = function(req, res, next) {
    
       
   try{ token = req.headers["x-Api-key"];
    if (!token) {token = req.headers["x-api-key"]}
  
   
    if (!token) {

    res.send({ status: false, msg: "token must be present" })}
  
    
    
    
    let decodedToken = jwt.verify(token, "functionup-radon");
    if (!decodedToken)
      return res.status(400).send({ status: false, msg: "token is invalid" });
  else{
    next()}}
    catch(err)
    {
        console.log(err.message)
        res.status(500).send(err.message)
     }




}


module.exports.authenticate=authenticate
