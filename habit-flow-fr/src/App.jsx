import { useEffect, useState } from "react";
import HabitFooter from "./components/habitFooter";
import HabitForm from "./components/habitForm";
import HabitList from "./components/habitList";
import Header from "./components/header";
import Stats from "./components/stats";

function App() {
  const [habits, setHabits] = useState([]);

  useEffect(() => {
    async function loadHabits() {
      try {
        const response = await fetch("http://localhost:5000/api/habits");
        if (!response.ok) throw new Error("Failed to fetch habits");

        const data = await response.json();
        setHabits(data.habits);
      } catch (error) {
        console.log(error);
      }
    }

    loadHabits();
  }, []);

  function addHabit(newHabit) {
    setHabits((previousHabits) => [...previousHabits, newHabit]);
  }

  async function completedToggle(id) {
    const habit = habits.find((habit) => habit._id === id);

    if (!habit) return;

    try {
      const response = await fetch(`http://localhost:5000/api/habits/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          completed: !habit.completed,
        }),
      });
      if (!response.ok) throw new Error("Failed to update habit");

      const data = await response.json();

      setHabits((preveHabit) =>
        preveHabit.map((habit) => (habit._id === id ? data.habit : habit)),
      );
    } catch (error) {
      console.log(error);
    }
  }

  async function deleteBtn(id) {
    try {
      const response = await fetch(`http://localhost:5000/api/habits/${id}`, {
        method: "DELETE",
      });

      if (!response.ok) throw new Error("Failed to delete habit");

      setHabits((previousHabits) =>
        previousHabits.filter((habit) => habit._id !== id),
      );
    } catch (error) {
      console.log(error);
    }
  }

  const total = habits.length;

  const completed = habits.filter((habit) => habit.completed === true).length;

  const pending = habits.filter((habit) => habit.completed === false).length;

  return (
    <div className="">
      <Header />
      <section className="px-5">
        <Stats total={total} completed={completed} pending={pending} />
        <HabitForm addHabit={addHabit} />
        <HabitList
          habits={habits}
          deleteBtn={deleteBtn}
          completedToggle={completedToggle}
        />
      </section>
      <HabitFooter />
    </div>
  );
}

export default App;
