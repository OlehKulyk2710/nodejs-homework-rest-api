const { User } = require("../../models");
const { RequestError } = require("../../helpers");

const update = async (req, res, next) => {
  const allowedValues = ["starter", "pro", "business"];
  try {
    const { _id } = req.user;
    const { subscription } = req.body;

    if (!allowedValues.includes(subscription)) {
      throw RequestError(
        400,
        `Bad request. Only "starter", "pro", "business" are allowed.`
      );
    }

    const updatedUser = await User.findByIdAndUpdate(_id, req.body, {
      new: true,
      select: "name email subscription",
    });

    if (!updatedUser) {
      throw RequestError(500, "Internal server error");
    }

    res.status(200).json(updatedUser);
  } catch (error) {
    next(error);
  }
};

module.exports = update;
