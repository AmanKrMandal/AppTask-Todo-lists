const TaskList = ({ tasks, deleteTask, clearTasks }) => {
  return (
    <div>
      <ol>
        {tasks.map((task) => (
          <li className="mt-2" key={task.name}>
            {task.name}
            <button
              className="btn btn-danger ms-5"
              onClick={() => deleteTask(task)}
            >
              Delete
            </button>
          </li>
        ))}
      </ol>
      <button className="btn btn-danger" onClick={clearTasks}>
        Clear Tasks
      </button>
    </div>
  );
};

export default TaskList;
