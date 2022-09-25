const contacts = require("../../models/contacts");

const getContacts = async (req, res, next) => {
  try {
    const contactsList = await contacts.getContactsList();
    res.status(200).json(contactsList);
  } catch (error) {
    next(error);
  }
};

module.exports = getContacts;
