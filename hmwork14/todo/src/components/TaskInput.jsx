import { useState } from "react";

function TaskInput({ addTask }) {
  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!input.trim()) return;
    addTask(input);
    setInput("");
  };

  return (
    <form onSubmit={handleSubmit} className="task-input">
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="დავალების შეყვანა"
      />
      <button type="submit">დამატება</button>
    </form>
  );
}

export default TaskInput;
