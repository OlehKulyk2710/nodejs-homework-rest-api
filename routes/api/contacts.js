const express = require("express");
const ctrl = require("../../controllers");
const { validateBody, isValidId } = require("../../middlewares");
const {
  addContactSchema,
  updateContactSchema,
  updateContactFavoriteSchema,
} = require("../../schemas");

const router = express.Router();

router.get("/", ctrl.getContacts);

router.get("/:contactId", isValidId, ctrl.getContactById);

router.post("/", validateBody(addContactSchema), ctrl.addContact);

router.put(
  "/:contactId",
  isValidId,
  validateBody(updateContactSchema),
  ctrl.updateContact
);
router.patch(
  "/:contactId/favorite",
  isValidId,
  validateBody(updateContactFavoriteSchema),
  ctrl.updateContactFavorite
);

router.delete("/:contactId", isValidId, ctrl.deleteContact);

module.exports = router;
