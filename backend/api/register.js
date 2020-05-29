const express = require("express");
const router = express.Router();
const connection = require("../db_conf/db_connection");

router.post("/register", (req, res) => {
  const isPresent = async () => {
    await connection.query(
      "SELECT * FROM user_details WHERE username=?",
      [req.body.username],
      (err, result, fields) => {
        if (err) console.log(err);

        if (result[0] != undefined) {
          res.status(203).json({ error: "username is already present" });
          return;
        }

        connection.query(
          "INSERT INTO user_details SET ?",
          [req.body],
          (err, result, fields) => {
            if (err) console.log(err);
            res.status(201).json({ message: "user is created" });
          }
        );
      }
    );
  };

  isPresent();

  //   const create = async () => {
  //     await connection.query(
  //       "INSERT INTO user_details SET ?",
  //       [req.body],
  //       (err, result, fields) => {
  //         if (err) console.log(err);
  //         res.status(200).json({ message: "success" });
  //       }
  //     );
  //   };
  //   create();
});

module.exports = router;
