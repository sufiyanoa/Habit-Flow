const HabitCard = ({ habit, deleteBtn, completedToggle }) => {
  return (
    <div className="flex justify-around p-2 border-2 rounded my-3 bg-white">
      <h2 className="font-bold">{habit.title}</h2>
      <button
        className={
          habit.completed
            ? "border px-1 rounded bg-green-500"
            : "border px-1 rounded bg-orange-400"
        }
        onClick={() => completedToggle(habit._id)}
      >
        {habit.completed ? "Completed" : "Pending"}
      </button>

      <button
        onClick={() => deleteBtn(habit._id)}
        className="border px-1 rounded bg-red-500"
      >
        Delete
      </button>
    </div>
  );
};

export default HabitCard;
