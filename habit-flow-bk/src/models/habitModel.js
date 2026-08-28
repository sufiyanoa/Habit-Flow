import mongoose from "mongoose";

const habitSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, trim: true },
    completed: { type: Boolean, default: false },
    stars: { type: Boolean, default: false },
  },
  { timestamps: true },
);

const Habit = mongoose.model("Habit", habitSchema);

export default Habit;
