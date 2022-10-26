const { BASE_URL, PORT } = process.env;

const createVerifyEmail = (email, verificationToken) => {
  const mail = {
    to: email,
    subject: "Confirmation of registration",
    html: `<a target="_blank" href="${BASE_URL}${PORT}/api/auth/verify/${verificationToken}">Confirm your email by clicking on this link</a>`,
  };
  return mail;
};

module.exports = createVerifyEmail;
