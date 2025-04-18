import { useState, useCallback } from "react";
import TaskInput from "./components/TaskInput";
import TaskList from "./components/TaskList";

function App() {
  const [tasks, setTasks] = useState([]);
  const [completed, setCompleted] = useState([]);

  const addTask = useCallback((text) => {
    setTasks((prev) => [...prev, { id: Date.now(), text }]);
  }, []);

  const completeTask = useCallback((id) => {
    setTasks((prevTasks) => {
      const task = prevTasks.find((t) => t.id === id);
      console.log("დასრულდა დავალება:", task);
  
      setCompleted((prevCompleted) => {
        const alreadyExists = prevCompleted.some((t) => t.id === id);
        if (alreadyExists) {
          console.warn("დავალება უკვე არის შესრულებულში:", task);
          return prevCompleted;
        }
        return [...prevCompleted, task];
      });
  
      return prevTasks.filter((t) => t.id !== id);
    });
  }, []);
  
  const deleteTask = useCallback((id) => {
    setCompleted((prev) => prev.filter((t) => t.id !== id));
  }, []);

  const moveBackToTodo = useCallback((id) => {
    setCompleted((prevCompleted) => {
      const task = prevCompleted.find((t) => t.id === id);
      if (!task) return prevCompleted;
  
      setTasks((prevTasks) => {
        const alreadyExists = prevTasks.some((t) => t.id === id);
        if (alreadyExists) {
          console.warn("დავალება უკვე დაბრუნებულია:", task);
          return prevTasks;
        }
        return [...prevTasks, task];
      });
  
      return prevCompleted.filter((t) => t.id !== id);
    });
  }, []);  

  return (
    <div className="app">
      <h1>To Do List</h1>
      <TaskInput addTask={addTask} />
      <div className="columns">
        <TaskList
          title="შესასრულებელი"
          tasks={tasks}
          onComplete={completeTask}
        />
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
