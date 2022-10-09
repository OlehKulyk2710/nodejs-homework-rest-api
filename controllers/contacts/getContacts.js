const { Contact } = require("../../models");

const getContacts = async (req, res, next) => {
  try {
    const { _id: owner } = req.user;
    const { page = "1", limit = "20", ...restQueries } = req.query;
    const skip = (page - 1) * limit;

    const contactsList = await Contact.find({ owner, ...restQueries }, "", {
      skip,
      limit,
    }).populate("owner", "name email");
    res.status(200).json(contactsList);
  } catch (error) {
    next(error);
  }
};

module.exports = getContacts;
