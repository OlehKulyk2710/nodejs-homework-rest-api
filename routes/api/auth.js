const express = require("express");
const { ctrlWrapper } = require("../../helpers");
const { validateBody, authenticate } = require("../../middlewares");
const { signup, login, getCurrent, logout } = require("../../controllers");
const { userSignupSchema, userLoginSchema } = require("../../schemas");

const router = express.Router();

router.post("/signup", validateBody(userSignupSchema), ctrlWrapper(signup));
router.post("/login", validateBody(userLoginSchema), ctrlWrapper(login));
router.get("/current", authenticate, ctrlWrapper(getCurrent));
router.post("/logout", authenticate, ctrlWrapper(logout));

module.exports = router;
