const express = require("express");
const router = express.Router();
const connection = require("../db_conf/db_connection");

// return file object based on filename
router.get("/", (req, res) => {
  const filename = req.query.filename;

  const get_file_info = async () => {
    await connection.query(
      "SELECT * FROM userFiles WHERE file_name=?",
      [req.query.filename],
      (err, result, fields) => {
        if (err) console.log(err);
        res.status(200).json({ result: result[0] });
      }
    );
  };

  get_file_info();
});

module.exports = router;
