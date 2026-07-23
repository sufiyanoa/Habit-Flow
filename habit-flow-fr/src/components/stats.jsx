const Stats = ({ completed, total, pending }) => {
  return (
    <div className="flex justify-around">
      <p className="bg-white border px-1 rounded">Total: {total}</p>
      <p className="bg-white border px-1 rounded">Pending: {pending} </p>
      <p className="bg-white border px-1 rounded">Completed: {completed} </p>
    </div>
  );
};

export default Stats;
