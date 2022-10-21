const express = require("express");
const { ctrlWrapper } = require("../../helpers");
const { validateBody, authenticate, upload } = require("../../middlewares");
const {
  signup,
  login,
  getCurrent,
  logout,
  update,
  updateAvatar,
} = require("../../controllers");
const {
  userSignupSchema,
  userLoginSchema,
  userUpdSubscrSchema,
} = require("../../schemas");

const router = express.Router();

router.post("/signup", validateBody(userSignupSchema), ctrlWrapper(signup));
router.post("/login", validateBody(userLoginSchema), ctrlWrapper(login));
router.get("/current", authenticate, ctrlWrapper(getCurrent));
router.post("/logout", authenticate, ctrlWrapper(logout));
router.patch(
  "/",
  authenticate,
  validateBody(userUpdSubscrSchema),
  ctrlWrapper(update)
);

router.patch(
  "/avatars",
  authenticate,
  upload.single("avatar"),
  ctrlWrapper(updateAvatar)
);

module.exports = router;
