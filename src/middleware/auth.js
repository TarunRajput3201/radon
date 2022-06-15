const jwt = require("jsonwebtoken");
const userModel = require("../models/userModel");
const authenticate = function(req, req, next) {
    //check the token in request header
    //validate this token
//     let userName = req.body.emailId;
//   let password = req.body.password;

//   let user = await userModel.findOne({ emailId: userName, password: password });
//   if (!user)
//     return res.send({
//       status: false,
//       msg: "username or the password is not corerct",
//     });
    
//     let token = jwt.sign(
//         {
//           userId: user._id.toString(),
//           batch: "radon",
//           organisation: "FUnctionUp",
//         },
//         "functionup-radon"
//       );
//       res.setHeader("x-auth-token", token);
    // token = req.headers["x-Auth-token"];
    
  
    // //If no token is present in the request header return error
    // if (!token) return res.send({ status: false, msg: "token must be present" });
  
    // console.log(token);
    
    // // If a token is present then decode the token with verify function
    // // verify takes two inputs:
    // // Input 1 is the token to be decoded
    // // Input 2 is the same secret with which the token was generated
    // // Check the value of the decoded token yourself
    // let decodedToken = jwt.verify(token, "functionup-radon");
    // if (!decodedToken)
    //   return res.send({ status: false, msg: "token is invalid" });
  
    next()
}


const authorise = function(req, res, next) {
    // comapre the logged in user's id and the id in request
    // let token = req.headers["x-Auth-token"];
    // let decodedToken = jwt.verify(token, "functionup-radon");
    // let userToBeModified = req.params.userId
    // //userId for the logged-in user
    // let userLoggedIn = decodedToken.userId

    // //userId comparision to check if the logged-in user is requesting for their own data
    // if(userToBeModified != userLoggedIn) return res.send({status: false, msg: 'User logged is not allowed to modify the requested users data'})

    next()
}
module.exports.authenticate=authenticate
module.exports.authorise=authorise