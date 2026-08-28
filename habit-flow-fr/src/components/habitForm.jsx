import { useState } from "react";

const HabitForm = ({ addHabit }) => {
  const [input, setInput] = useState("");
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    const title = input.trim();

    if (!title) return;

    setError("");
    setIsSubmitting(true);

    try {
      const response = await fetch(
        "https://habit-flow-sfp2.onrender.com/api/habits",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            title,
          }),
        },
      );
      if (!response.ok) throw new Error("Failed to create habit");

      const data = await response.json();

      if (!data.habit) throw new Error("Invalid response from server");

      addHabit(data.habit);
      setInput("");
    } catch (error) {
      setError("Habit add nahi ho saki. Dobara try karein.");
      console.error(error);
    } finally {
      setIsSubmitting(false);
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
        disabled={isSubmitting}
      />
      <button
        className="border  p-1 rounded ml-3 my-3 bg-blue-400"
        type="submit"
        disabled={isSubmitting}
      >
        {isSubmitting ? "Adding..." : "Add Habit"}
      </button>
      {error && <p className="text-red-600">{error}</p>}
    </form>
  );
};

export default HabitForm;
