const express = require("express");
const router = express.Router();
const connection = require("../db_conf/db_connection");

router.get("/", function (req, res) {
  const file = `/home/phoenix/Documents/Document-Tracking-System/upload_data/${req.query.filename}`;
  try {
    res.download(file);
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
