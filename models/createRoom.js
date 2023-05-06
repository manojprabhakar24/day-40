const { array } = require("joi/lib");
const mongoose = require("mongoose");

// Derive a Schema

const RoomSchema = mongoose.Schema({
  room_id: { type: String, required: true },
  no_of_seats: { type: Number, required: true },
  amenities: { type: [String], required: true },
  price: { type: Number, required: true },
});

// compile schema to model

const Room = mongoose.model("Room", RoomSchema);

module.exports = Room;
