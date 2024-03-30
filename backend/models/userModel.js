const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    rollNumber: { type: String, required: true },
    appointments: [
        { type: mongoose.Schema.Types.ObjectId, ref: "Appointment" }
    ]
});

const User = mongoose.model("User", userSchema);

module.exports = User;
