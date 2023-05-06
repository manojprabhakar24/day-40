const mongoose = require("mongoose");

// Derive a Schema

const BookroomSchema = mongoose.Schema({
  customer_name: { type: String, required: true },
  booking_id: { type: String, required: true },
  booking_status: { type: String, required: true },
  date: { type: String, required: true },
  startTime: { type: String, required: true },
  endTime: { type: String, required: true },
  room_id: { type: String, required: true },
});

// compile schema to model

const Booking = mongoose.model("Booking", BookroomSchema);

module.exports = Booking;
