const express = require("express");
const router = express.Router();
var multer = require("multer");
const connection = require("../db_conf/db_connection");

var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "../upload_data");
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});

var upload = multer({ storage: storage }).single("file");

router.post("/", (req, res) => {
  upload(req, res, function (err) {
    if (err instanceof multer.MulterError) {
      return res.status(500).json(err);
    } else if (err) {
      return res.status(500).json(err);
    }
    const db_entry = async () => {
      connection.query("INSERT INTO files SET ?", []);
    };
    console.log(req.file);
    return res.status(200).send(req.file);
  });
});

module.exports = router;
