const mongoose = require('mongoose')
const author = require('../models/authorModel.js')
const blog =require('../models/blogModel.js')

let createBlog = async function(req,res){
   try{
     let data = req.body
    let create = await blog.create(data)
    res.status(201).send({status : true, data : create})
 }
 catch(err){
    res.status(500).send({error : err.message})
 }
}

let getBlogs = async function(req,res){
   try {
     let data = await blog.find({isDeleted : false,isPublished : true})
    if(data.length>0){
        res.status(200).send({status : true, data : data})
    } else {
        res.status(404).send({status : false, msg : "NO documents found"})
    }
}
catch(err){
    res.status(500).send({error : err.message})
}
}

let filterBlogs = async function(req,res){
   try{
     let authorId = req.query.authorId
    let category = req.query.category
    let tags = req.query.tags
    let subcategory = req.query.subcategory
    let data = await blog.find()
    if(data.length>0){
        res.status(200).send({status : true, data : data})
    } else {
        res.status(400).send({status : false, msg : "No data found"})
    }
}
catch(err){
    res.status(500).send({error : err.message})
}
}
module.exports.createBlog=createBlog
module.exports.getBlogs=getBlogs
module.exports.filterBlogs=filterBlogs