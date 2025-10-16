import React, { useEffect } from 'react'
import Taskform from './components/Taskform'
import Tasklist from './components/Tasklist'
import Progresstracker from './components/Progresstracker'
import { useState } from 'react'
function App() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  });
  const addTask = (task) => {
    setTasks([...tasks, task]);
  }
  return (
    <div>
      <h1>Task Nest</h1>
      <p>Our friendly TaskManager</p>
      <Taskform addTask={addTask}/>
      <Tasklist />
      <Progresstracker />
      <button>Clear All Tasks</button>
    </div>
  )
}

export default App