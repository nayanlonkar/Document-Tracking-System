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

  let file_name = file.originalname;
  let doc_type = meta.doc_type;
  let username = meta.sender;
  let sender = meta.sender;
  let receiver = meta.receiver;

  let obj1 = {
    file_name: file.originalname,
    doc_type: meta.doc_type,
    username: meta.sender,
  };

  let obj2 = {
    file_name: file.originalname,
    sender: meta.sender,
    receiver: meta.receiver,
  };

  const file_api = async () => {
    await connection.query(
      "INSERT INTO files SET ?",
      [obj1],
      (err, result, fields) => {
        if (err) console.log(err);
        // res.status(201).json({ message: "file is created" });
      }
    );
  };

  const userFile_api = async () => {
    await connection.query(
      "INSERT INTO userFiles SET ?",
      [obj2],
      (err, result, fields) => {
        if (err) console.log(err);
        res.status(201).json({ message: "file is successfully sent" });
      }
    );
  };

  file_api();
  userFile_api();
});

module.exports = router;
