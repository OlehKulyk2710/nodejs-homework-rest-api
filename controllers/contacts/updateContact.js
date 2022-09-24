const contacts = require("../../models/contacts");
const schemas = require("../../schemas/index");
const RequestError = require("../../helpers/RequestError");

const updateContact = async (req, res, next) => {
  try {
    const { error } = schemas.updateContactSchema.validate(req.body);
    if (error) {
      throw RequestError(400, error.message);
    }

    const { contactId } = req.params;
    const updatedContact = await contacts.updateContact(contactId, req.body);
    if (!updatedContact) {
      throw RequestError(404);
    }
    res.status(200).json(updatedContact);
  } catch (error) {
    next(error);
  }
};

module.exports = updateContact;
