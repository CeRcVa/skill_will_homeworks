import React from "react";

function TaskItem({ task, onComplete, onDelete, onReturn }) {
  console.log("Render:", task.text);
  return (
    <div className="task-item">
      <span>{task.text}</span>
      {onComplete && (
        <button onClick={() => onComplete(task.id)}>დასრულება</button>
      )}
      {onDelete && (
        <>
          <button onClick={() => onReturn(task.id)}>დააბრუნე</button>
          <button onClick={() => onDelete(task.id)}>წაშლა</button>
        </>
      )}
    </div>
  );
}

export default React.memo(TaskItem);
