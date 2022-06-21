const author = require('../models/blogModel.js')

let validAuthorId = async function(req,res,next){
   try {
     let id = req.body.authorId
    let check = await author.findById(id)

    if(!check){
      res.status(400).send({status: false, msg : "No such author is exists"})
    }
    next()
}
catch(err){
    res.status(500).send({error : err.messsage})
}
}

module.exports.validAuthorId= validAuthorId
