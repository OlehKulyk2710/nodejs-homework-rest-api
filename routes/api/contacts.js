const express = require("express");
const ctrl = require("../../controllers");
const { validateBody, isValidId, authenticate } = require("../../middlewares");
const {
  addContactSchema,
  updateContactSchema,
  updateContactFavoriteSchema,
} = require("../../schemas");

const router = express.Router();

router.get("/", authenticate, ctrl.getContacts);

router.get("/:contactId", authenticate, isValidId, ctrl.getContactById);

router.post("/", authenticate, validateBody(addContactSchema), ctrl.addContact);

router.put(
  "/:contactId",
  authenticate,
  isValidId,
  validateBody(updateContactSchema),
  ctrl.updateContact
);
router.patch(
  "/:contactId/favorite",
  authenticate,
  isValidId,
  validateBody(updateContactFavoriteSchema),
  ctrl.updateContactFavorite
);

router.delete("/:contactId", authenticate, isValidId, ctrl.deleteContact);

module.exports = router;
