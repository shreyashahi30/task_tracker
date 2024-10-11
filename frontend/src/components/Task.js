// components/Task.js

import React from 'react';

function Task({ task, onDelete, onUpdate }) {
  return (
    <div className="task">
      <h3>{task.title}</h3>
      <p>{task.description}</p>
      <button onClick={() => onUpdate(task)}>Edit</button>
      <button onClick={() => onDelete(task._id)}>Delete</button>
    </div>
  );
}

export default Task;

