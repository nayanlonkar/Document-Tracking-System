const express = require("express");
const router = express.Router();
const connection = require("../db_conf/db_connection");

router.post("/", (req, res) => {
  console.log(req.body);

  const forward = async () => {
    await connection.query(
      "INSERT INTO userFiles SET ?",
      [req.body],
      (err, result, fields) => {
        if (err) console.log(err);
        res.status(200).json({ message: "success" });
      }
    );
  };

  forward();
});

module.exports = router;
