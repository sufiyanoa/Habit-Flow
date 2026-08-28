import { useState } from "react";

const HabitForm = ({ addHabit }) => {
  const [input, setInput] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    const title = input.trim();

    if (!title) return;

    try {
      const response = await fetch("http://localhost:5000/api/habits", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({
          title,
        }),
      });
      if (!response.ok) throw new Error("Failed to create habit");

      const data = await response.json();

      addHabit(data.habit);
      setInput("");
    } catch (error) {
      console.log(error);
    }
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
        className="border  p-1 rounded ml-3 my-3 bg-blue-400"
        type="submit"
      >
        Add Habit
      </button>
    </form>
  );
};

export default HabitForm;
