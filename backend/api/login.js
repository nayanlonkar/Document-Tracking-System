const express = require("express");
const router = express.Router();
const connection = require("../db_conf/db_connection");

router.post("/", (req, res) => {
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

        if (req.body.password === result[0].password) {
          res.status(200).json({
            user_id: result[0].id,
            first_name: result[0].first_name,
            last_name: result[0].last_name,
            username: result[0].username,
          });
          return;
        }

        res.status(401).json({ error: "unauthorized access" });
      }
    );

  result();
});
module.exports = router;
