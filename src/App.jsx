import React, { useEffect, useState } from 'react';
import TaskForm from './Components/Taskform';
import TaskList from './components/TaskList';
import ProgressTracker from './Components/Progresstracker';
import './style.css';
function App() {
  const [tasks, setTasks] = useState(() => {
    // ✅ Load tasks from localStorage when app starts
    const savedTasks = localStorage.getItem("tasks");
    return savedTasks ? JSON.parse(savedTasks) : [];
  });

  // ✅ Save tasks to localStorage whenever tasks change
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  // ✅ Add new task
  const addTask = (task) => {
    setTasks([...tasks, task]);
  };


  const updateTask = (updatedTask, index) => {
    const newTask = [...tasks];
    newTask[index] = updatedTask;
    setTasks(newTask);
  };


  const deleteTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  const clearAllTasks = () => {
    setTasks([]);
    localStorage.removeItem("tasks");
  };

  return (
    <div>
      <header>
      <h1>Task Nest</h1>
      <p>Your friendly Task Manager</p>
      </header>
      <TaskForm addTask={addTask} />
      <TaskList tasks={tasks} updateTask={updateTask} deleteTask={deleteTask} />
      <ProgressTracker tasks={tasks} />
      {tasks.length > 0 && (
        <button onClick={clearAllTasks} className="clear">Clear All Tasks</button>
      )}
      
    </div>
  );
}

export default App;
