const Joi = require("joi");

const userUpdSubscrSchema = Joi.object({
  subscription: Joi.string().valid("starter", "pro", "business").required(),
});

module.exports = userUpdSubscrSchema;
