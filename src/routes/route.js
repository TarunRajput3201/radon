const express = require('express');
const router = express.Router();

const blogController = require("../controllers/blogController.js")
const AuthorController = require("../controllers/authorController")

const mid= require("../middlewares/middleware.js")

router.post("/createBlog", mid.validAuthorId, blogController.createBlog)
router.get("/getBlogs", blogController.getBlogs)
router.get("/filterData", blogController.filterBlogs)
router.post("/authors", AuthorController.createAuthor)
router.put("/blog/:blogId",mid.validBlogId, blogController.update1)
router.delete("/blogs/:blogId",mid.validBlogId,blogController.deleteBlog)
router.delete("/blogs/:blogId",mid.validBlogId,blogController.deleteBlog)
module.exports = router;