// // src/components/TaskManager.js
// import  { useState, useEffect } from 'react';
// import axios from 'axios';
// import TaskList from './TaskList';
// import TaskInput from './TaskInput';

// const TaskManager = () => {
//   const [tasks, setTasks] = useState([]);
//   const [taskText, setTaskText] = useState('');

//   // Fetch tasks from backend
//   useEffect(() => {
//     axios.get('http://localhost:8080/tasks')
//       .then(response => setTasks(response.data))
//       .catch(err => console.error(err));
//   }, []);

//   // Add new task
//   const addTask = () => {
//     if (!taskText) return;
//     axios.post('http://localhost:8080/tasks', { text: taskText })
//       .then(response => {
//         setTasks([...tasks, response.data]);
//         setTaskText('');
//       })
//       .catch(err => console.error(err));
//   };

//   // Toggle task completion
//   const toggleCompletion = (id, completed) => {
//     axios.put(`http://localhost:8080/tasks/${id}`, { completed: !completed })
//       .then(response => {
//         setTasks(tasks.map(task => task._id === id ? response.data : task));
//       })
//       .catch(err => console.error(err));
//   };

//   // Delete a task
//   const deleteTask = (id) => {
//     axios.delete(`http://localhost:8080/tasks/${id}`)
//       .then(() => {
//         setTasks(tasks.filter(task => task._id !== id));
//       })
//       .catch(err => console.error(err));
//   };

//   return (
//     <div className="task-manager">
//       <h1>Task Manager</h1>
//       <TaskInput taskText={taskText} setTaskText={setTaskText} addTask={addTask} />
//       <TaskList tasks={tasks} toggleCompletion={toggleCompletion} deleteTask={deleteTask} />
//     </div>
//   );
// };

// export default TaskManager;
