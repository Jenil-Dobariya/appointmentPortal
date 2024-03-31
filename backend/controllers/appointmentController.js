const Appointment = require("../models/appointmentModel");
const User = require("../models/userModel");

const addAppointment = async (req, res) => {
  try {
    console.log(req.body);
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
      visit: req.body.visit,
      lastVisitDate: req.body.lastVisitDate,
      comments: req.body.comments,
    });

    await appointment.save();

    const username = req.params.username;

    let user = await User.findOne({ username: username });

    if (!user) {
      user = new User({
        username: username,
        appointments: [appointment._id],
      });
      await user.save();
    } else {
      user.appointments.push(appointment._id);
      await user.save();
    }

    res.status(200).json({ message: "Appointment added successfully" });
  } catch (error) {
    console.log(error.message)
    res.status(500).json({ error: error.message });
  }
};

const getAppointments = async (req, res) => {
  try {
    const username = req.params.username;
    const user = await User.findOne({ username }).populate("appointments");

    if (!user) {
      user = new User({
        username: username,
        appointments: [],
      });
      await user.save();

      return res.status(200).json({ appointments: [] });
    }

    const sortedAppointments = user.appointments.sort((a, b) => {
      if(a.appointmentDate === b.appointmentDate) {
        var t1 = a.appointmentTime.split(' - ');
        var t2 = b.appointmentTime.split(' - ');
        var time1 = t1.split(':');
        var time2 = t2.split(':');

        var date1 = new Date(0,0,0, time1[0], time1[1]);
        var date2 = new Date(0,0,0, time2[0], time2[1]);

        return date1 - date2;
      }
      return a.appointmentDate - b.appointmentDate;
    });

    res.status(200).json({ appointments: sortedAppointments });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

module.exports = { addAppointment, getAppointments };
