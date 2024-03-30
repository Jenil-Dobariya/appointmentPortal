const mongoose = require("mongoose");

const appointmentSchema = new mongoose.Schema({
  name: { type: String, required: true },
  rollNumber: { type: String, required: true },
  programme: { type: String, required: true },
  department: { type: String, required: true },
  hall: { type: String, required: true },
  roomNumber: { type: String, required: true },
  phone: { type: String, required: true },
  counsellor: { type: String, required: true },
  appointmentDate: { type: Date, required: true },
  lastVisit: { type: Date, required: true },
  comments: { type: String, required: false },
});

const Appointment = mongoose.model("Appointment", appointmentSchema);

module.exports = Appointment;
