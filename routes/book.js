const router = require("express").Router();
const Booking = require("../models/bookRoom");

// Create Operation
router.route("/").post((req, res) => {
  let ts = Date.now();

  let date_ob = new Date(ts);
  let curdate = date_ob.getDate();
  let month = date_ob.getMonth() + 1;
  let year = date_ob.getFullYear();

  // prints date & time in DD-MM-YYYY format

  const currentDate = curdate + "-" + month + "-" + year;

  const customer_name = req.body.customer_name;
  const booking_id = req.body.booking_id;
  const booking_status = req.body.booking_status;
  const date = currentDate;
  const startTime = req.body.startTime;
  const endTime = req.body.endTime;
  const room_id = req.body.room_id;

  const newBooking = new Booking({
    customer_name,
    booking_id,
    booking_status,
    date,
    startTime,
    endTime,
    room_id,
  });

  newBooking
    .save()
    .then(() => {
      res.json("Room Booked");
    })
    .catch((err) => {
      res.status(400).json("Error: " + err);
    });
});

module.exports = router;
