const express = require('express');
const router = express.Router();

const blogController = require("../controllers/blogController.js")
const AuthorController = require("../controllers/authorController")
const authentication= require("../middlewares/authentication")
const authorization= require("../middlewares/authorization")
const mid= require("../middlewares/middleware.js")
router.post("/login", AuthorController.loginUser)
router.post("/createBlog/:userId",authentication.authenticate,authorization.authorise, mid.validAuthorId, blogController.createBlog)
router.get("/getBlogs/:userId",authentication.authenticate,authorization.authoriseGetAndDelete, blogController.getBlogs)
router.get("/filterData/:userId",authentication.authenticate,authorization.authoriseGetAndDelete, blogController.filterBlogs)
router.post("/authors", AuthorController.createAuthor)
router.put("/blog/:blogId",authentication.authenticate,authorization.authorisePutAndDelete,mid.validBlogId, blogController.update1)
router.delete("/blog/:blogId",authentication.authenticate,authorization.authorisePutAndDelete,mid.validBlogId,blogController.deleteBlog)
router.delete("/blogs",authentication.authenticate,authorization.authoriseGetAndDelete,mid.validBlogId,blogController.deleteBlogs)
module.exports = router;