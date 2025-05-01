function TaskItem({ task, onComplete, onDelete, onReturn, onStartProgress }) {
  return (
    <div className="task-item">
      <span>{task.text}</span>
      <div className="actions">
        {onStartProgress && <button onClick={() => onStartProgress(task.id)}>დაწყება</button>}
        {onComplete && <button onClick={() => onComplete(task.id)}>დასრულება</button>}
        {onReturn && <button onClick={() => onReturn(task.id)}>დააბრუნე</button>}
        {onDelete && <button onClick={() => onDelete(task.id)}>წაშლა</button>}
      </div>
    </div>
  );
}

export default TaskItem;
