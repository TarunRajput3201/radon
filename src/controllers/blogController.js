const mongoose = require('mongoose')
const author = require('../models/authorModel.js')
const { findOneAndUpdate } = require('../models/blogModel.js')
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
     let a=req.query
    let data = await blog.find(a)
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


let update1 = async function(req,res){
    try {
        let blogId = req.params.blogId
        let a = req.body
        let s= await blog.findById(blogId)
        let tg = s.tags

        let b=a.tags
        for(let i=0;i<b.length;i++){
          if(tg.includes(b[i])){
            continue;
          } else {
            tg.push(b[i])
          }
        }
          
        let t = await blog.findById(blogId)
       let sc = t.subcategory
        let c = a.subcategory
        for(let i=0;i<c.length;i++){
            if(sc.includes(c[i])){
                continue;
        } else {
            sc.push(c[i])
        }
        }
        let title = req.body.title
        let body = req.body.body
        let update1 = await blog.findOneAndUpdate({_id : blogId},{$set :{title : title, boby : body,tags : tg,subcategory : sc,isPublished:true, publishedAt:Date.now()}},{new : true})
        res.status(200).send({status : true , msg : update1})
}
    catch(err){
        res.status(500).send({error : err.message})
    } }
    const deleteBlog = async function(req, res) {    
        try {
       let blogId = req.params.blogId
       let data =await blog.find({_id:blogId,isDeleted:false})
       if(data.length>0){
        let DeleteBlog = await blog.findOneAndUpdate({_id: blogId}, {$set:{isDeleted: true , deletedAt:Date.now()}}, {new: true})
        res.status(200).send({status:"deleted"})

       }
       else{res.status(404).send({status:false, msg: "no document found"})}
      }
      catch(err){
        res.status(500).send({error : err.message})
    }
    }
    let deleteBlogs = async function(req,res){
        try{
            let a=req.query
         
         let data = await blog.findOneAndUpdate({a, isDeleted:false}, {$set:{isDeleted:true,deletedAt:Date.now()}}, {new:true})
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
module.exports.update1=update1
module.exports.deleteBlog=deleteBlog
module.exports.deleteBlogs=deleteBlogs