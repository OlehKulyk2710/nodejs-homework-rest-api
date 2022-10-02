const { Contact } = require("../../models");

const getContacts = async (req, res, next) => {
  try {
    const contactsList = await Contact.find();
    res.status(200).json(contactsList);
  } catch (error) {
    next(error);
  }
};

module.exports = getContacts;
