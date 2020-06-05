const express = require("express");
const router = express.Router();
var multer = require("multer");
const connection = require("../db_conf/db_connection");

const storage = multer.diskStorage({
  destination: "../upload_data",
  filename(req, file, cb) {
    cb(null, `${file.originalname}`);
  },
});

const upload = multer({ storage });

// express route where we receive files from the client
// passing multer middleware
router.post("/", upload.single("file"), (req, res) => {
  const file = req.file; // file passed from client
  const meta = req.body; // all other values passed from the client, like name, etc..

  console.log(meta);
});

module.exports = router;
