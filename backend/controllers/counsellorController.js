const Counsellor = require("../models/counsellorModel");

const addCounsellor = async (req, res) => {
  try {
    const counsellor = new Counsellor({
      name: req.body.name,
      email: req.body.email,
      appointments: [],
    });

    await counsellor.save();

    res.status(200).json({ message: "Counsellor added successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = { addCounsellor };
