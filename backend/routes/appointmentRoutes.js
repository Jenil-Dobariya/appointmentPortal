const express = require("express")
const bodyParser = require("body-parser")
const router = express.Router()

router.use(bodyParser.json())

const {addAppointment, getAppointments} = require("../controllers/appointmentController")

router.route("/add/:username").post(addAppointment)
router.route("/get/:username").get(getAppointments)

module.exports = router