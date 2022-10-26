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
  verify,
  resendVerify,
} = require("../../controllers");
const {
  userSignupSchema,
  userLoginSchema,
  userUpdSubscrSchema,
  verifyEmailSchema,
} = require("../../schemas");

const router = express.Router();

router.post("/signup", validateBody(userSignupSchema), ctrlWrapper(signup));
router.get("/verify/:verificationToken", ctrlWrapper(verify));
router.post(
  "/verify",
  validateBody(verifyEmailSchema),
  ctrlWrapper(resendVerify)
);
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
