import { useEffect, useState } from "react";
import HabitFooter from "./components/habitFooter";
import HabitForm from "./components/habitForm";
import HabitList from "./components/habitList";
import Header from "./components/header";
import dummyData from "./data/habits";
import Stats from "./components/stats";

function App() {
  const [habits, setHabits] = useState(() => {
    const data = localStorage.getItem("Habits");
    if (data) {
      return JSON.parse(data);
    }
    return dummyData;
  });

  useEffect(() => {
    localStorage.setItem("Habits", JSON.stringify(habits));
  });

  function addHabit(newHabit) {
    setHabits([...habits, newHabit]);
    console.log(habits);
  }

  function completedToggle(id) {
    const updateHabit = habits.map((habit) => {
      if (habit.id === id) {
        return {
          ...habit,
          completed: !habit.completed,
        };
      }
      return habit;
    });

    setHabits(updateHabit);
  }

  function deleteBtn(id) {
    const updateHabit = habits.filter((habit) => habit.id != id);
    setHabits(updateHabit);
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
