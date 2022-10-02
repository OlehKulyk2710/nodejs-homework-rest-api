const { Contact } = require("../../models");
const { RequestError } = require("../../helpers");

const updateContactFavorite = async (req, res, next) => {
  try {
    const { contactId } = req.params;

    const updatedContact = await Contact.findByIdAndUpdate(
      contactId,
      req.body,
      { new: true }
    );

    if (!updatedContact) {
      throw RequestError(404);
    }
    res.status(200).json(updatedContact);
  } catch (error) {
    next(error);
  }
};

module.exports = updateContactFavorite;
