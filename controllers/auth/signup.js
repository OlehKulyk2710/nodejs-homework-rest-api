const bcrypt = require("bcryptjs");
const { User } = require("../../models");
const { RequestError } = require("../../helpers");

const signup = async (req, res) => {
  const { name, email, password } = req.body;
  const user = await User.findOne({ email });

  if (user) {
    throw RequestError(409, "Email in use.");
  }

  const hashPassword = await bcrypt.hash(password, 10);

  const result = await User.create({ name, email, password: hashPassword });

  res.status(201).json({
    user: {
      name: result.name,
      email: result.email,
      subscription: result.subscription,
    },
  });
};

module.exports = signup;
