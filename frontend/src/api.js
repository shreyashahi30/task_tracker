// api.js

const API_URL = 'http://localhost:5000/api/tasks';

// Fetch all tasks
export const fetchTasks = async () => {
  const response = await fetch(API_URL);
  return await response.json();
};

// Create a new task
export const createTask = async (task) => {
  const response = await fetch(API_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(task),
  });
  return await response.json();
};

// Update a task
export const updateTask = async (id, updatedTask) => {
  const response = await fetch(`${API_URL}/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(updatedTask),
  });
  return await response.json();
};

// Delete a task
export const deleteTask = async (id) => {
  await fetch(`${API_URL}/${id}`, { method: 'DELETE' });
};

