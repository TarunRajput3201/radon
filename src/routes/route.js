const express = require('express');
const router = express.Router();
// const UserModel= require("../models/userModel.js")
const UserController= require("../controllers/userController")
const BookController= require("../controllers/bookController")

const newBookController= require("../controllers/newBookController")


router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.post("/createUser", UserController.createUser  )

router.get("/getUsersData", UserController.getUsersData)

router.post("/createBook", BookController.createBook  )

router.get("/getBooksData", BookController.getBooksData)

router.post("/createnewBook", newBookController.createNewBook  )

router.get("/getnewBooksData", newBookController.getNewBooksData)

router.post("/createAuthor", newBookController.createAuthor  )

router.get("/getAuthorssData", newBookController.getAuthorsData)

module.exports = router;