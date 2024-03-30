const Appointment = require("../models/appointment");

const addAppointment = async (req, res) => {
  try {
    const appointment = new Appointment({
      name: req.body.name,
      rollNumber: req.body.rollNumber,
      programme: req.body.programme,
      department: req.body.department,
      hall: req.body.hall,
      roomNumber: req.body.roomNumber,
      phone: req.body.phone,
      counsellor: req.body.counsellor,
      appointmentDate: req.body.appointmentDate,
      appointmentTime: req.body.appointmentTime,
      lastVisit: req.body.lastVisit,
      comments: req.body.comments,
    });

    await appointment.save();
    res.status(201).json({ appointment });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = { addAppointment };
