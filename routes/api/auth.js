const express = require("express");
const { ctrlWrapper } = require("../../helpers");
const { validateBody } = require("../../middlewares");
const { signup } = require("../../controllers");
const { userSignupSchema } = require("../../schemas");

const router = express.Router();

router.post("/signup", validateBody(userSignupSchema), ctrlWrapper(signup));
router.post("/login");

module.exports = router;
