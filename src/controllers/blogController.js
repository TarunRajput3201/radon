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

module.exports.createBlog=createBlog

