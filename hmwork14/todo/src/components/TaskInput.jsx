import { useState, useRef, useEffect } from "react";

function TaskInput({ addTask }) {
  const [text, setText] = useState("");
  const inputRef = useRef();

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text.trim()) return;
    addTask(text.trim());
    setText("");
    inputRef.current.focus();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        ref={inputRef}
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
