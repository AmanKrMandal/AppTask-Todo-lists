import TaskForm from "./component/TaskForm";
import TaskList from "./component/TaskList";
import { useState } from "react";

function App() {
  const [tasks, setTasks] = useState([]);

  const addTask = (task) => {
    setTasks([...tasks, task]);
  };

  const deleteTask = (taskToDelete) => {
    setTasks(tasks.filter((task) => task !== taskToDelete));
  };

  const clearTasks = () => {
    setTasks([]);
  };

  return (
    <div className="container col-sm-4 offset-sm-4 mt-5">
      <TaskForm addTask={addTask} />
      <TaskList tasks={tasks} deleteTask={deleteTask} clearTasks={clearTasks} />
    </div>
  );
}

export default App;
