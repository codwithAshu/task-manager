// src/components/TaskItem.js


const TaskItem = ({ task, toggleCompletion, deleteTask }) => {
  return (
    <li className="task-item" style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
      <input
        type="checkbox"
        checked={task.completed}
        onChange={() => toggleCompletion(task._id, task.completed)}
      />
      {task.text}
      <button onClick={() => deleteTask(task._id)}>Delete</button>
    </li>
  );
};

export default TaskItem;
