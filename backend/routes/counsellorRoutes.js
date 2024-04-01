const express = require("express");
const bodyParser = require("body-parser");
const router = express.Router();

router.use(bodyParser.json());

const { addCounsellor } = require("../controllers/counsellorController");

router.route("/add").post(addCounsellor);

module.exports = router;
