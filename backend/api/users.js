const express = require("express");
const router = express.Router();
const connection = require("../db_conf/db_connection");

// return list of users for recipient list
router.get("/", (req, res) => {
  let username = req.query.username;
  let return_list = [];
  const get_result = async () => {
    await connection.query(
      "SELECT username FROM user_details WHERE username LIKE ? LIMIT 10",
      [username + "%"],
      (err, result, fields) => {
        if (err) console.log(err);
        for (i = 0; i < result.length; i++) {
          return_list.push(result[i].username);
        }
        res.status(200).json({ result: return_list });
      }
    );
  };
  get_result();
});

module.exports = router;
