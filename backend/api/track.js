const express = require("express");
const router = express.Router();
const connection = require("../db_conf/db_connection");

router.get("/", (req, res) => {
  const return_list = [];

  const received_files = async () => {
    await connection.query(
      "SELECT * FROM userFiles WHERE file_name=?",
      [req.query.filename],
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

  received_files();
});

module.exports = router;
