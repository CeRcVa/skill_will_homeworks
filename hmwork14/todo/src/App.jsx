import { useState, useEffect, useCallback } from "react";
import TaskInput from "./components/TaskInput";
import TaskList from "./components/TaskList";
import './app.css';

function App() {
  const [tasks, setTasks] = useState([]);
  const [inProgress, setInProgress] = useState([]);
  const [completed, setCompleted] = useState([]);

  useEffect(() => {
    setTasks(JSON.parse(localStorage.getItem("tasks")) || []);
    setInProgress(JSON.parse(localStorage.getItem("inProgress")) || []);
    setCompleted(JSON.parse(localStorage.getItem("completed")) || []);
  }, []);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
    localStorage.setItem("inProgress", JSON.stringify(inProgress));
    localStorage.setItem("completed", JSON.stringify(completed));
  }, [tasks, inProgress, completed]);

  const addTask = useCallback((text) => {
    setTasks((prev) => [...prev, { id: Date.now(), text }]);
  }, []);

  const moveToInProgress = useCallback((id) => {
    const task = tasks.find((t) => t.id === id);
    if (!task) return;
    setTasks((prev) => prev.filter((t) => t.id !== id));
    setInProgress((prev) => [...prev, task]);
  }, [tasks]);

  const moveToDone = useCallback((id) => {
    const task = inProgress.find((t) => t.id === id);
    if (!task) return;
    setInProgress((prev) => prev.filter((t) => t.id !== id));
    setCompleted((prev) => [...prev, task]);
  }, [inProgress]);

  const deleteTask = useCallback((id) => {
    setCompleted((prev) => prev.filter((t) => t.id !== id));
  }, []);

  const moveBackToTodo = useCallback((id) => {
    const task = completed.find((t) => t.id === id);
    if (!task) return;
    setCompleted((prev) => prev.filter((t) => t.id !== id));
    setTasks((prev) => [...prev, task]);
  }, [completed]);

  const moveBackToBacklog = useCallback((id) => {
    const task = inProgress.find((t) => t.id === id);
    if (!task) return;
    setInProgress((prev) => prev.filter((t) => t.id !== id));
    setTasks((prev) => [...prev, task]);
  }, [inProgress]);

  return (
    <div className="app">
      <h1>To Do List</h1>
      <TaskInput addTask={addTask} />
      <div className="columns">
        <TaskList title="Backlog" tasks={tasks} onStartProgress={moveToInProgress} />
        <TaskList
          title="In Progress"
          tasks={inProgress}
          onComplete={moveToDone}
          onReturn={moveBackToBacklog}
        />
        <TaskList
          title="Done"
          tasks={completed}
          onDelete={deleteTask}
          onReturn={moveBackToTodo}
        />
      </div>
    </div>
  );
}

export default App;