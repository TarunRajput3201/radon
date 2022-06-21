const express = require('express');
const router = express.Router();
const AuthorController= require("../controllers/authorController.js")

router.post("/authors", AuthorController.createAuthor)

module.exports = router;