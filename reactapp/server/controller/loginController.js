const loginModel = require("../model/loginModel");

const loginController = {
  checkCredemtials: (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    return username === loginModel.getUser().username &&
      password === loginModel.getUser().password
      ? res.status(200).send("Successfully logged in")
      : res.status(404).send("User not found");
  },
};

module.exports = loginController;
