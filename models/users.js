const { default: mongoose, model } = require("mongoose");
const { Schema } = mongoose;

const userSchema = new Schema(
  {
    name: { type: String, required: true, trim: true },
    email: {
      type: String,
      required: true,
      trim: true,
      lowercase: true,
      unique: true,
    },
    mobile: {
      type: Number,
      required: true,
      unique: true,
    },
  },
  { timestamps: true }
);

const User = model("User", userSchema);
module.exports = User;
