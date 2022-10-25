const bcrypt = require("bcryptjs");
const gravatar = require("gravatar");
const { nanoid } = require("nanoid");
const { User } = require("../../models");
const { RequestError, sendEmail } = require("../../helpers");

const { BASE_URL, PORT } = process.env;

const signup = async (req, res) => {
  const { name, email, password } = req.body;
  const user = await User.findOne({ email });

  if (user) {
    throw RequestError(409, "Email in use.");
  }

  const hashPassword = await bcrypt.hash(password, 10);
  const avatarURL = gravatar.url(email);
  const verificationToken = nanoid();

  const result = await User.create({
    name,
    email,
    password: hashPassword,
    avatarURL,
    verificationToken,
  });

  const mail = {
    to: email,
    subject: "Confirmation of registration",
    html: `<a target="_blank" href="${BASE_URL}${PORT}/api/auth/verify/:${verificationToken}">Confirm your email by clicking on this link</a>`,
  };

  await sendEmail(mail);

  res.status(201).json({
    user: {
      name: result.name,
      email: result.email,
      subscription: result.subscription,
      verificationToken: result.verificationToken,
    },
  });
};

module.exports = signup;
