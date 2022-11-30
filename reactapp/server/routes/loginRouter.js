const { Router } = require("express");
const express = require("express");
const loginController = require("../controller/loginController");

const loginRouter = express.Router();

loginRouter.post("/login", loginController.checkCredemtials);

module.exports = loginRouter;
