const signup = require("./signup");
const login = require("./login");
const getCurrent = require("./getCurrent");
const logout = require("./logout");
const update = require("./update");
const updateAvatar = require("./updateAvatar");
const verify = require("./verify");
const resendVerify = require("./resendVerify");

module.exports = {
  signup,
  login,
  getCurrent,
  logout,
  update,
  updateAvatar,
  verify,
  resendVerify,
};
