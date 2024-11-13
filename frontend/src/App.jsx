import { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  const [tasks, setTasks] = useState([]);
  const [taskText, setTaskText] = useState('');

  // Fetch tasks from the backend
  useEffect(() => {
    axios.get('http://localhost:8080/tasks')
      .then(response => setTasks(response.data))
      .catch(err => console.error(err));
  }, []);
  



  // Add a new task
  const addTask = () => {
    console.log('Adding task:', taskText);
    if (!taskText) return;
  
    axios.post('http://localhost:8080/tasks', { text: taskText })
      .then(response => {
        console.log('Task added:', response.data); // Log the added task
        setTasks([...tasks, response.data]); // Update the state with the new task
        setTaskText('');
      })
      .catch(err => {
        console.error('Error adding task:', err);
      });
  };
  

  // Toggle task completion
  const toggleCompletion = (id, isdone) => {
    axios.put(`http://localhost:8080/tasks/${id}`, { isdone: !isdone })
      .then(response => {
        setTasks(tasks.map(task => task._id === id ? response.data : task));
      })
      .catch(err => console.error(err));
  };

  // Delete a task
  const deleteTask = (id) => {
    axios.delete(`http://localhost:8080/tasks/${id}`)
      .then(() => {
        setTasks(tasks.filter(task => task._id !== id));
      })
      .catch(err => console.error(err));
  };

  return (
    <div className="App">
      <h1>Task Manager</h1>

      <input
        type="text"
        placeholder="Add a new task"
        value={taskText}
        onChange={e=> setTaskText(e.target.value)}
      />
      <button onClick={addTask}>Add Task</button>

      <ul>
        {tasks.map(task => (
          <li key={task._id} style={{ textDecoration: task.isdone ? 'line-through' : 'none' }}>
            <input
              type="checkbox"
              checked={task.isdone}
              onChange={() => toggleCompletion(task._id, task.isdone)}
            />
            {task.text}
            <button onClick={() => deleteTask(task._id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
