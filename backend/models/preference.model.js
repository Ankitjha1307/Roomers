import mongoose from "mongoose";

const preferenceSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
      unique: true 
    },

    gender: { type: String },
    age: { type: String },
    occupation: { type: String },
    smoking: { type: String },
    pets: { type: String },
    cleanliness: { type: String },
    habits: { type: String }
  },
  { timestamps: true }
);

export default mongoose.model("Preference", preferenceSchema);
