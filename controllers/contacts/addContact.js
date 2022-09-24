const contacts = require("../../models/contacts");
const schemas = require("../../schemas/index");
const RequestError = require("../../helpers/RequestError");

const addContact = async (req, res, next) => {
  try {
    const { error } = schemas.addContactSchema.validate(req.body);
    if (error) {
      throw RequestError(400, error.message);
    }

    const newContact = await contacts.addContact(req.body);

    if (!newContact) {
      throw RequestError(500, "Internal Server Error");
    }
    res.status(201).json(newContact);
  } catch (error) {
    next(error);
  }
};

module.exports = addContact;
