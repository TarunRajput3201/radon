const author = require('../models/authorModel.js')

let validAuthorId = async function(req,res,next){
   try {
     let id = req.body.authorId
    let check = await author.findById(id).select({_id:1})
    if(id !== check){
      res.status(400).send({status: false, msg : "No such author is exists"})
    }
    else{next()}
}
catch(err){
    res.status(500).send({error : err.messsage})
}
}

module.exports.validAuthorId= validAuthorId
