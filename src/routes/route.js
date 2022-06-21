const express = require('express');
const router = express.Router();
const blogController = require("../controllers/blogController.js")
const mid= require("../middlewares/middleware.js")

router.post("/createBlog", mid.validateAuthorId, blogController.createBlog)
router.get("/getBlogs", blogController.getBlogs)
router.get("/filterData", blogController.filterBlogs)

module.exports = router;