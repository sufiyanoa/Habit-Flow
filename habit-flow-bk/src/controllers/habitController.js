import Habit from "../models/habitModel.js";

export const createHabit = async (req, res) => {
  try {
    const { title } = req.body;
    const trimmedTitle = title?.trim();

    if (!trimmedTitle) {
      return res.status(400).json({ message: "Title is required" });
    }

    const habit = await Habit.create({
      title: trimmedTitle,
    });

    res.status(201).json({
      message: "Habit successfully created",
      habit,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

export const getHabits = async (req, res) => {
  try {
    const habits = await Habit.find();
    res.status(200).json({
      message: "habits fetched successfully",
      habits,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

export const updateHabit = async (req, res) => {
  try {
    const { title, completed, stars } = req.body;

    const habit = await Habit.findByIdAndUpdate(
      req.params.id,
      {
        title,
        completed,
        stars,
      },
      {
        new: true,
        runValidators: true,
      },
    );

    if (!habit) {
      return res.status(404).json({
        message: "Habit not found",
      });
    }

    res.status(200).json({
      message: "Habit Updated Successfully",
      habit,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

export const deleteHabit = async (req, res) => {
  try {
    const habit = await Habit.findByIdAndDelete(req.params.id);

    if (!habit) {
      return res.status(400).json({
        message: "Habit not found",
      });
    }

    res.status(200).json({
      message: "Habit deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};
