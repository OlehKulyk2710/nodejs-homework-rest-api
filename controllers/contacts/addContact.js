// const contacts = require("../../models/contacts");
const { Contact } = require("../../models");

const { RequestError } = require("../../helpers");

const addContact = async (req, res, next) => {
  try {
    console.log("Before");
    const newContact = await Contact.create(req.body);

    console.log("newContact", newContact);

    if (!newContact) {
      throw RequestError(500, "Internal Server Error");
    }
    res.status(201).json(newContact);
  } catch (error) {
    next(error);
  }
};

module.exports = addContact;
