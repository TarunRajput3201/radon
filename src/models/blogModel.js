const mongoose = require('mongoose');

const blogSchema = new mongoose.Schema( {

     title: {type:String,required:true}, 
     body: {type:String,required:true}, 
     authorId: {type:objectId, ref:'Author'}, tags: {type:[String]},
      category: {type:String, required:true},
       subcategory: {type:[String]},
     deletedAt: Date,
     isDeleted: {type:Boolean, default:false},
     publishedAt: Date,
       isPublished: {type:Boolean, default: false}}
   
, { timestamps: true });

module.exports = mongoose.model('Blog', blogSchema)