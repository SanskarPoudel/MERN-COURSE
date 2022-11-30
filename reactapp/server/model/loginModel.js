const username = "admin";
const password = "admin";

const loginModel = {
  getUser: () => {
    return { username, password };
  },
};

module.exports = loginModel;
