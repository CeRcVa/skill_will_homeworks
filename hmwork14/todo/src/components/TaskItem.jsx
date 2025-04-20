import React from "react";

function TaskItem({ task, onComplete, onDelete, onReturn }) {
  return (
    <div className="task-item">
      <span>{task.text}</span>
      {onComplete && <button onClick={() => onComplete(task.id)}>დასრულება</button>}
      {onReturn && <button onClick={() => onReturn(task.id)}>დააბრუნე</button>}
      {onDelete && <button onClick={() => onDelete(task.id)}>წაშლა</button>}
    </div>
  );
}

export default React.memo(TaskItem);
