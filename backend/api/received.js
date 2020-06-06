const express = require("express");
const router = express.Router();
const connection = require("../db_conf/db_connection");

router.get("/", (req, res) => {
  const return_list = [];

  const received_files = async () => {
    await connection.query(
      "SELECT * FROM userFiles WHERE receiver=?",
      [req.query.username],
      (err, result, fields) => {
        if (err) console.log(err);
        if (result.length === 0) {
          res.status(200).json({ result: null });
          return;
        }
        for (i = 0; i < result.length; i++) {
          return_list.push(result[i]);
        }
        res.status(200).json({ result: return_list });
      }
    );
  };

  const received_files_with_fileter = async () => {
    await connection.query(
      "SELECT * FROM userFiles WHERE receiver=? and doc_type=?",
      [req.query.username, req.query.filter],
      (err, result, fields) => {
        if (err) console.log(err);
        if (result.length === 0) {
          res.status(200).json({ result: null });
          return;
        }
        for (i = 0; i < result.length; i++) {
          return_list.push(result[i]);
        }
        res.status(200).json({ result: return_list });
      }
    );
  };

  if (req.query.filter === "all") {
    received_files();
  } else {
    received_files_with_fileter();
  }
});

module.exports = router;
