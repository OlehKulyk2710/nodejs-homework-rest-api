const getContacts = require("./getContacts");
const getContactById = require("./getContactById");
const addContact = require("./addContact");
const updateContact = require("./updateContact");
const updateContactFavorite = require("./updateContactFavorite");
const deleteContact = require("./deleteContact");

module.exports = {
  getContacts,
  getContactById,
  addContact,
  updateContact,
  updateContactFavorite,
  deleteContact,
};
