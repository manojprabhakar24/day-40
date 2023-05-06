const router = require("express").Router();
const bookedData = require("../models/bookRoom");

router.route("/").get((req, res) => {
  bookedData
    .find({}, { _id: 0, booking_id: 0, booking_status: 0 })
    .then((booking) => res.json(booking))
    .catch((err) => {
      res.status(400).json("Error:" + err);
    });
});

module.exports = router;
