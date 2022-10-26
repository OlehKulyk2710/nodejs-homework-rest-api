const {
  getContacts,
  getContactById,
  addContact,
  updateContact,
  updateContactFavorite,
  deleteContact,
} = require("./contacts");

const {
  signup,
  login,
  getCurrent,
  logout,
  update,
  updateAvatar,
  verify,
  resendVerify,
} = require("./auth");

module.exports = {
  getContacts,
  getContactById,
  addContact,
  updateContact,
  updateContactFavorite,
  deleteContact,
  signup,
  login,
  getCurrent,
  logout,
  update,
  updateAvatar,
  verify,
  resendVerify,
};
