import React, { useState } from 'react'

function TaskForm({addTask}) {
    const [task, setTask] = useState("");
    const [priority, setPriority] = useState("medium");
    const [category, setCategory] = useState("general");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!task.trim()) return;
        addTask({text: task, priority, category, completed: false})
        setTask("");
        setPriority("medium");
        setCategory("general");
    }
    return (
        <form action="" onSubmit={handleSubmit}>
            <div>
                <input type="text" placeholder="Enter the task" value={task} onChange={(e) => setTask(e.target.value)} />
                <button type="submit">Add Task</button>
                <h1>{task} {priority} {category}</h1>
            </div>
            <div>
                <select name="" id="" value={priority} onChange={(e) => setPriority(e.target.value)}>
                    <option value="high">High</option>
                    <option value="medium">Medium</option>
                    <option value="low">Low</option>
                </select>

                <select name="" id="" onChange={(e) => setCategory(e.target.value)}>
                    <option value="general">General</option>
                    <option value="work">Work</option>
                    <option value="personal">Personal</option>
                </select>
            </div>
        </form>
    )
}

export default TaskForm