const fs = require("fs/promises");
const path = require("path");
const Jimp = require("jimp");
const { User } = require("../../models");

const avatarDir = path.join(__dirname, "../../", "public", "avatars");

const updateAvatar = async (req, res) => {
  try {
    const { _id } = req.user;
    const { path: tempUpload, originalname } = req.file;

    const extension = originalname.split(".").pop();
    const fileName = `${_id}.${extension}`;
    const resultUpload = path.join(avatarDir, fileName);

    const avatarImage = await Jimp.read(tempUpload);
    avatarImage.resize(250, 250).write(resultUpload);

    const avatarURL = path.join("avatars", fileName);
    await User.findByIdAndUpdate(_id, { avatarURL });

    res.status(200).json({ avatarURL });
  } catch (error) {
    fs.unlink(req.file.path);
    throw error;
  }
};

module.exports = updateAvatar;
