const express = require('express');
const router = express.Router();

const AuthorController= require("../controllers/authorController.js")
const blogController=require("../controllers/blogController")
const mid=require("../middlewares/middleware")
router.post("/authors", AuthorController.createAuthor)



router.post("/createBlog", mid.validAuthorId, blogController.createBlog)


module.exports = router;