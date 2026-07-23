import HabitCard from "./habitCard";

const HabitList = ({ habits, deleteBtn, completedToggle }) => {
  return (
    <div>
      {habits.map((habit, ind) => (
        <HabitCard
          habit={habit}
          key={ind}
          deleteBtn={deleteBtn}
          completedToggle={completedToggle}
        />
      ))}
    </div>
  );
};

export default HabitList;
