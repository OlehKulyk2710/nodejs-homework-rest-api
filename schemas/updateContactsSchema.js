const Joi = require("joi");

const updateContactSchema = Joi.object({
  name: Joi.string().alphanum().min(3).max(10).required(),
  email: Joi.string()
    .email({ minDomainSegments: 2, tlds: { allow: ["com", "net"] } })
    .required(),
  phone: Joi.string().min(10).required(),
});

module.exports = updateContactSchema;
