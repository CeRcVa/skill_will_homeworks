import { useState, useEffect, useCallback } from "react";
import TaskInput from "./components/TaskInput";
import TaskList from "./components/TaskList";

function App() {
  const [tasks, setTasks] = useState([]);
  const [completed, setCompleted] = useState([]);

  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
    const storedCompleted = JSON.parse(localStorage.getItem("completed")) || [];
    setTasks(storedTasks);
    setCompleted(storedCompleted);
  }, []);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
    localStorage.setItem("completed", JSON.stringify(completed));
  }, [tasks, completed]);

  const addTask = useCallback((text) => {
    setTasks((prev) => [...prev, { id: Date.now(), text }]);
  }, []);

  const completeTask = useCallback((id) => {
    const task = tasks.find((t) => t.id === id);
    if (!task) return;
  
    setTasks((prev) => prev.filter((t) => t.id !== id));
    setCompleted((prev) => {
      const exists = prev.some((t) => t.id === id);
      if (exists) return prev;
      return [...prev, task];
    });
  }, [tasks]);
  

  const deleteTask = useCallback((id) => {
    setCompleted((prev) => prev.filter((t) => t.id !== id));
  }, []);

  const moveBackToTodo = useCallback((id) => {
    const task = completed.find((t) => t.id === id);
    if (!task) return;
  
    setCompleted((prev) => prev.filter((t) => t.id !== id));
    setTasks((prev) => {
      const exists = prev.some((t) => t.id === id);
      if (exists) return prev;
      return [...prev, task];
    });
  }, [completed]);
  

  return (
    <div className="app">
      <h1>To Do List</h1>
      <TaskInput addTask={addTask} />
      <div className="columns">
        <TaskList title="შესასრულებელი" tasks={tasks} onComplete={completeTask} />
        <TaskList
          title="შესრულებული"
          tasks={completed}
          onDelete={deleteTask}
          onReturn={moveBackToTodo}
        />
      </div>
    </div>
  );
}

export default App;
