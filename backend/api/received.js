const express = require("express");
const router = express.Router();
const connection = require("../db_conf/db_connection");

router.get("/", (req, res) => {
  console.log("this is received api");
  const return_list = [];
  const received_files = async () => {
    await connection.query(
      "SELECT * FROM userFiles WHERE receiver=?",
      [req.query.username],
      (err, result, fields) => {
        if (err) console.log(err);
        // console.log(result);
        // for (i = 0; i < result.length; i++) {
        //   let temp_list = [];
        //   temp_list.push(result[i].id);
        //   temp_list.push(result[i].file_name);
        //   temp_list.push(result[i].sender);
        //   temp_list.push(result[i].receiver);
        //   temp_list.push(result[i].is_received);
        //   temp_list.push(result[i].date_time);
        //   return_list.push(temp_list);
        // }
        // res.status(200).json({ result: return_list });
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
