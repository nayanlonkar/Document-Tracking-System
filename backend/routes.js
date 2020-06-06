const express = require("express");
const router = express.Router();

/************************************* routes imports ***************************/
const login = require("./api/login");
const register = require("./api/register");
const users = require("./api/users");
const file = require("./api/file");
const received = require("./api/received");
/********************************************************************************/

/*************************************** middlewares ****************************/
router.use("/api/login", login);
router.use("/api/register", register);
router.use("/api/users", users);
router.use("/api/file", file);
router.use("/api/received", received);
/********************************************************************************/

router.get("/", (req, res) => {
  res.send("<h1>Root Page</h1>");
});

module.exports = router;
