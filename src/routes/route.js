const express = require('express');
const router = express.Router();
const blogController = require("../controllers/blogController.js")
const AuthorController = require("../controllers/authorController")

const mid= require("../middlewares/middleware.js")

router.post("/createBlog", mid.validAuthorId, blogController.createBlog)
router.post("/authors", AuthorController.createAuthor)

module.exports = router;