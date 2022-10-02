const { Contact } = require("../../models");
const { RequestError } = require("../../helpers");

const deleteContact = async (req, res, next) => {
  try {
    const { contactId } = req.params;
    const removedContact = await Contact.findByIdAndRemove(contactId);

    if (!removedContact) {
      throw RequestError(404);
    }

    res.status(200).json({ message: "contact deleted" });
  } catch (error) {
    next(error);
  }
};

module.exports = deleteContact;
