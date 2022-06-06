const BookModel= require("../models/userModel")


const createBookData= async function (req, res) {
    let data= req.body
    let bookData= await BookModel.create(data)
    res.send({msg: bookData})
}

const getBookData= async function (req, res) {
    let allBooks= await BookModel.find()
    res.send({msg: allBooks})
}


module.exports.createBookData= createBookData
module.exports.getBookData= getBookData