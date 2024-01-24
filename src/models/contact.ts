import mongoose from "mongoose";

const contactSchema = new mongoose.Schema(
  {
    name: {
      required: true,
      type: "string",
    },
    email: {
      required: true,
      type: "string",
    },
    phone: {
      required: true,
      type: "string",
    },
    message: {
      required: true,
      type: "string",
    },
  },
  { timestamps: true }
);

const ContactModel =
  mongoose.models.Contact || mongoose.model("Contact", contactSchema);

export default ContactModel;
