import { useState } from "react";
import TaskInput from "./components/TaskInput";
import TaskList from "./components/TaskList";

function App() {
  const [tasks, setTasks] = useState([]);
  const [completed, setCompleted] = useState([]);

  const addTask = (text) => {
    setTasks([...tasks, { id: Date.now(), text }]);
  };

  const completeTask = (id) => {
    const task = tasks.find((t) => t.id === id);
    setTasks(tasks.filter((t) => t.id !== id));
    setCompleted([...completed, task]);
  };

  const deleteTask = (id) => {
    setCompleted(completed.filter((t) => t.id !== id));
  };

  const moveBackToTodo = (id) => {
    const task = completed.find((t) => t.id === id);
    setCompleted(completed.filter((t) => t.id !== id));
    setTasks([...tasks, task]);
  };

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
