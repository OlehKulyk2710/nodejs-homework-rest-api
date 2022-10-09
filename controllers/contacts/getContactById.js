const { RequestError } = require("../../helpers");
const { Contact } = require("../../models");

const getContactById = async (req, res, next) => {
  try {
    const { contactId } = req.params;

    const contact = await Contact.findById(contactId).populate(
      "owner",
      "name email"
    );

    if (!contact) {
      throw RequestError(404, "Not found");
    }
    res.status(200).json(contact);
  } catch (error) {
    next(error);
  }
};

module.exports = getContactById;
