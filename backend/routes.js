const express = require("express");
const router = express.Router();

/************************************* routes imports ***************************/
const login = require("./api/login");
/********************************************************************************/

/*************************************** middlewares ****************************/
router.use("/api", login);
/********************************************************************************/

router.get("/", (req, res) => {
  res.send("<h1>Root Page</h1>");
});

module.exports = router;
