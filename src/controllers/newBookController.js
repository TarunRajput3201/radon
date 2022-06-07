const { count } = require("console")
const newBookModel= require("../models/newBookModel")
const authorsModel= require("../models/authorsModel")
const createNewBook= async function (req, res) {
    let data= req.body

    let savedData= await newBookModel.create(data)
    res.send({msg: savedData})
}
const createAuthor= async function (req, res) {
    let data= req.body

    let savedData= await authorsModel.create(data)
    res.send({msg: savedData})
}
const getNewBooksData= async function (req, res) {

    // let getId= await authorsModel.find({author_name:"Chetan Bhagat"}).select({author_id:1 , _id:0})//2nd
    // let allBooks= await newBookModel.find(getId[0])
    // let data= await newBookModel.findOneAndUpdate({name:"Two states"},{$set:{price:100}},{new:true} )//3rd
    // let authorData=await authorsModel.find({author_id:data.author_id}).select({author_name:1 ,_id:0})
    
    let bookData= await newBookModel.find({price:{$gte:50 , $lte:100}}).select({author_id:1 ,_id:0})
    let authorName=[]
    for(let i=0 ; i<bookData.length ; i++){
        authorName[i]= await authorsModel.find(bookData[i]).select({author_name:1 , _id:0})
     
     }
   
    res.send({msg: authorName})

}
const getAuthorsData= async function (req, res) {

    let allBooks= await authorsModel.find( )

   
   res.send({msg: allBooks})
}


module.exports.createNewBook= createNewBook
module.exports.getNewBooksData= getNewBooksData
module.exports.createAuthor= createAuthor
module.exports.getAuthorsData= getAuthorsData