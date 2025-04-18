import { useState } from "react";

function TaskInput({ addTask }) {
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim() === "") return;
    addTask(text.trim());
    setText("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="ახალი დავალება..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button type="submit">დამატება</button>
    </form>
  );
}

export default TaskInput;
