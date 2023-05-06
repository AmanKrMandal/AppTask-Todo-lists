import { useState } from "react";

const TaskForm = ({ addTask }) => {
  const [taskName, setTaskName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (taskName) {
      addTask({ name: taskName });
      setTaskName("");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter task"
        className="form-control"
        value={taskName}
        onChange={(e) => setTaskName(e.target.value)}
      />
      <button type="submit" className="btn btn-primary mt-2">
        Add Task
      </button>
    </form>
  );
};

export default TaskForm;
