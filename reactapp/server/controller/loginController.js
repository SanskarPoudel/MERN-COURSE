const userModel = require("../model/userModel");

const loginController = {
  checkCredemtials: (req, res) => {
    const { username, password } = req.body;

    return username === userModel.getUser().username &&
      password === userModel.getUser().password
      ? res.status(200).send("Successfully logged in")
      : res.status(404).send("User not found");
  },
};

module.exports = loginController;
