const jwt = require("jsonwebtoken");

const authenticate = function(req, res, next) {
    
       
//    try{ token = req.headers["x-Api-key"];
//     if (!token) {token = req.headers["x-api-key"]}
  
   
//     if (!token) {

//     res.send({ status: false, msg: "token must be present" })}
  
    
    
    
//     let decodedToken = jwt.verify(token, "functionup-radon");
//     if (!decodedToken)
//       return res.status(400).send({ status: false, msg: "token is invalid" });
//   else{
//     next()}}
//     catch(err)
//     {
//         console.log(err.message)
//         res.status(500).send(err.message)
//     }



try {
    let token = req.headers["x-Api-key"];
    if (!token)
     token = req.headers["x-api-key"];
    if (!token) return res.status(404).send({ status: false, msg: "token must be present" });
   console.log(token);

    let UserId=req.params.userId
    let decodedToken = jwt.verify(token, "functionup-radon");
    let decetUser=decodedToken.userId
    if (!decodedToken) {
      return res.status(400).send({ status: false, msg: "token is invalid" });
    }
    else if(UserId!==decetUser)
      return res.status(401).send({ status: false, msg: "not allow to modyfy user" });
    else
  
    next()
  } 
  catch (err) {
    console.log("This is the error :", err.message)
    res.status(500).send({ msg: "Error", error: err.message })
  }
}


module.exports.authenticate=authenticate
