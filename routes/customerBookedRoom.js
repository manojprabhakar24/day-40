const router = require("express").Router();
const bookedData = require("../models/bookRoom");

router.route("/").post((req, res) => {
  bookedData
    .aggregate([
      {
        $match: {
          customer_name: req.body.customer_name,
        },
      },
      {
        $project: {
          _id: 0,
          customer_name: 1,
          date: 1,
          room_id: 1,
          startTime: 1,
          endTime: 1,
          booking_id: 1,
          booking_status: 1,
        },
      },
      {
        $group: {
          count: { $sum: 1 },
          _id: "$id",
          customer_name: "$customer_name",

          customer_name: {
            $push: "$$ROOT",
          },
        },
      },
    ])

    .then((booking) => res.json(booking))
    .catch((err) => {
      res.status(400).json("Error:" + err);
    });
});

module.exports = router;
