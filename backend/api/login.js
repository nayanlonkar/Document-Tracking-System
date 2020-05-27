const express = require("express");
const router = express.Router();
const connection = require("../db_conf/db_connection");

router.post("/login", (req, res) => {
  console.log(req.body);
  res.send("this is login page");
});
module.exports = router;
