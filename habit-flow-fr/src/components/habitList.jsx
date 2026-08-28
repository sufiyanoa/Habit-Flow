import HabitCard from "./habitCard";

const HabitList = ({ habits, deleteBtn, completedToggle }) => {
  return (
    <div>
      {habits.map((habit) => (
        <HabitCard
          habit={habit}
          key={habit._id}
          deleteBtn={deleteBtn}
          completedToggle={completedToggle}
        />
      ))}
    </div>
  );
};

export default HabitList;
