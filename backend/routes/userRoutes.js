const express = require("express")
const router = express.Router()

const { hello } = require("../controllers/userController")

router.route("/add").get(hello)

module.exports = router