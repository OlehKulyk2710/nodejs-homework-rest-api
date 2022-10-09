const { Contact } = require("../../models");

const { RequestError } = require("../../helpers");

const addContact = async (req, res, next) => {
  try {
    const { _id: owner } = req.user;

    const newContact = await Contact.create({ ...req.body, owner });

    if (!newContact) {
      throw RequestError(500, "Internal Server Error");
    }
    res.status(201).json(newContact);
  } catch (error) {
    next(error);
  }
};

module.exports = addContact;
