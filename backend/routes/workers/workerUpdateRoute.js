const express = require("express");

const router = express.Router();

const WorkersList = require("../../models/workers/worker");

router.post("/", (req, res) => {
  console.log(req.body);
  const data = req.body.name;
  var query = { _id: req.body.helper };

  WorkersList.findOneAndUpdate(query, req.body, (error) => {
    if (error) {
      console.log(error);
      res.status(500).json({
        msg: "server error",
      });
    } else {
      res.json({
        msg: "data saved succefully",
      });
    }
  });
});

module.exports = router;
