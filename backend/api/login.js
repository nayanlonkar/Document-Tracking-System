const express = require("express");
const router = express.Router();
const connection = require("../db_conf/db_connection");

router.post("/login", (req, res) => {
  const result = async () =>
    await connection.query(
      "SELECT * FROM user_details WHERE username=?",
      [req.body.username],
      (err, result, fields) => {
        if (err) {
          res.status(400).json({ error: "bad request" });
        }
        if (result[0] == undefined) {
          res.status(401).json({ error: "username does not exist" });
        }
        res.status(200).json({ message: "success" });
      }
    );

  result();
  // res.status(200).json({ message: "success" });
});
module.exports = router;
