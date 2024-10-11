// pages/TaskList.js

import React, { useState, useEffect } from 'react';
import Task from '../components/Task';
import TaskForm from '../components/TaskForm';
import { fetchTasks, createTask, updateTask, deleteTask } from '../api';

function TaskList() {
  const [tasks, setTasks] = useState([]);
  const [taskToEdit, setTaskToEdit] = useState(null);

  useEffect(() => {
    const loadTasks = async () => {
      const tasksData = await fetchTasks();
      setTasks(tasksData);
    };
    loadTasks();
  }, []);

  const handleCreate = async (task) => {
    const newTask = await createTask(task);
    setTasks([...tasks, newTask]);
  };

  const handleUpdate = async (task) => {
    const updatedTask = await updateTask(taskToEdit._id, task);
    setTasks(tasks.map((t) => (t._id === updatedTask._id ? updatedTask : t)));
    setTaskToEdit(null);
  };

  const handleDelete = async (id) => {
    await deleteTask(id);
    setTasks(tasks.filter((task) => task._id !== id));
  };

  return (
    <div>
      <h1>Task Tracker</h1>
      <TaskForm taskToEdit={taskToEdit} onSubmit={taskToEdit ? handleUpdate : handleCreate} />
      {tasks.map((task) => (
        <Task key={task._id} task={task} onDelete={handleDelete} onUpdate={setTaskToEdit} />
      ))}
    </div>
  );
}

export default TaskList;

