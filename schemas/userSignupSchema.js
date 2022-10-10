const Joi = require("joi");

const userSignupSchema = Joi.object({
  name: Joi.string().min(3).max(10).required(),
  email: Joi.string()
    .email({ minDomainSegments: 2, tlds: { allow: ["com", "net"] } })
    .required(),
  password: Joi.string().min(6).required(),
});

module.exports = userSignupSchema;
