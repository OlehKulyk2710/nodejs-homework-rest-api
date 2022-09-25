const Joi = require("joi");

const addContactSchema = Joi.object({
  name: Joi.string().min(3).max(10).required(),
  email: Joi.string()
    .email({ minDomainSegments: 2, tlds: { allow: ["com", "net"] } })
    .required(),
  phone: Joi.string().min(10).required(),
});

module.exports = addContactSchema;
