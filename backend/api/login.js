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
          return;
        }
        if (result[0] == undefined) {
          res.status(401).json({ error: "username does not exist" });
          return;
        }
        // res.status(200).json({ message: "success" });
        res.status(200).json({
          fist_name: result[0].first_name,
          last_name: result[0].last_name,
          username: result[0].username,
        });
        return;
      }
    );

  result();
  // res.status(200).json({ message: "success" });
});
module.exports = router;
