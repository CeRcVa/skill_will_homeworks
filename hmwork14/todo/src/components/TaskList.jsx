import TaskItem from "./TaskItem";
import React from "react";

function TaskList({ title, tasks, onComplete, onDelete, onReturn, onStartProgress }) {
  return (
    <div className="task-list">
      <h2>{title} | {tasks.length}</h2>
      {tasks.length === 0 ? (
        <p>დავალებები არ არის</p>
      ) : (
        tasks.map((task) => (
          <TaskItem
            key={task.id}
            task={task}
            onComplete={onComplete}
            onDelete={onDelete}
            onReturn={onReturn}
            onStartProgress={onStartProgress}
          />
        ))
      )}
    </div>
  );
}

export default React.memo(TaskList);
