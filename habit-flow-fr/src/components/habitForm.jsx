import { useState } from "react";

const HabitForm = ({ addHabit }) => {
  const [input, setInput] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    if (input.trim() === "") {
      return;
    }
    const newHabit = {
      id: Date.now(),
      title: input,
      completed: false,
    };
    addHabit(newHabit);
    setInput("");
  }

  return (
    <form onSubmit={handleSubmit} className="text-center">
      <input
        className="border p-1 rounded bg-white"
        placeholder="Title"
        id="title"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button
        className="border p-1 px-2 rounded ml-8 my-3 bg-blue-400"
        type="submit"
      >
        Add Habit
      </button>
    </form>
  );
};

export default HabitForm;
