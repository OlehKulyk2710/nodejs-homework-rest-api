const { isValidObjectId } = require("mongoose");

const { RequestError } = require("../helpers");

const isValidId = (req, res, next) => {
  const { contactId } = req.params;

  const result = isValidObjectId(contactId);
  if (!result) {
    next(RequestError(404, `Id ${contactId} isn't valid.`));
  }

  next();
};

module.exports = isValidId;
