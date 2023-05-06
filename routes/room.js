const router = require("express").Router();
const Rooms = require("../models/createRoom");

// Create Operation
router.route("/").post((req, res) => {
  const room_id = req.body.room_id;
  const no_of_seats = req.body.no_of_seats;
  const amenities = req.body.amenities;
  const price = req.body.price;

  const newRoom = new Rooms({
    room_id,
    no_of_seats,
    amenities,
    price,
  });

  newRoom
    .save()
    .then(() => {
      res.json("Room Created");
    })
    .catch((err) => {
      res.status(400).json("Error: " + err);
    });
});

module.exports = router;
