const express = require("express");
const router = express.Router();

/************************************* routes imports ***************************/
const login = require("./api/login");
const register = require("./api/register");
const users = require("./api/users");
/********************************************************************************/

/*************************************** middlewares ****************************/
router.use("/api/login", login);
router.use("/api/register", register);
router.use("/api/users", users);
/********************************************************************************/

router.get("/", (req, res) => {
  res.send("<h1>Root Page</h1>");
});

module.exports = router;
