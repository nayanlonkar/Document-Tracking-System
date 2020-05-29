const express = require("express");
const router = express.Router();

/************************************* routes imports ***************************/
const login = require("./api/login");
const register = require("./api/register");
/********************************************************************************/

/*************************************** middlewares ****************************/
router.use("/api", login);
router.use("/api", register);
/********************************************************************************/

router.get("/", (req, res) => {
  res.send("<h1>Root Page</h1>");
});

module.exports = router;
