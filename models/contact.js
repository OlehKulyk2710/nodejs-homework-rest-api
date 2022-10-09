const { Schema, model } = require("mongoose");
const { handleSaveErrors } = require("../helpers");

const contactSchema = new Schema(
  {
    name: {
      type: String,
      unidue: true,
      required: [true, "Set name for contact"],
    },
    email: {
      type: String,
      unidue: true,
      required: true,
    },
    phone: {
      type: String,
      required: true,
    },
    favorite: {
      type: Boolean,
      default: false,
    },
    owner: {
      type: Schema.Types.ObjectId,
      ref: "user",
      required: true,
    },
  },
  { versionKey: false }
);

contactSchema.post("save", handleSaveErrors);

const Contact = model("contact", contactSchema);

module.exports = Contact;
