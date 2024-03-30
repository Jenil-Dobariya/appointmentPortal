const express = require('express');
const connectDB = require('./config/db');
const dotenv = require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

connectDB();

app.use("/user/appointment", require("./routes/appointmentRoutes"))

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
