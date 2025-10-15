import React from 'react'
import Taskform from './components/Taskform'
import Tasklist from './components/Tasklist'
import Progresstracker from './components/Progresstracker'
function App() {
  return (
    <div>
      <h1>Task Nest</h1>
      <p>Our friendly TaskManager</p>
      <Taskform />
      <Tasklist />
      <Progresstracker />
      <button>Clear All Tasks</button>
    </div>
  )
}

export default App