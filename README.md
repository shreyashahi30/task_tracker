# Task Tracker Application

A full-stack task tracking application built with **React** on the frontend and **Node.js/Express** with **MongoDB** on the backend. This app allows users to create, manage, and track tasks.

## Project Structure

### Frontend (`/task-tracker-frontend`)
- Built using **React**.
- Communicates with the backend through API calls.
- Implements basic task list, login, and registration pages.

#### Key Frontend Directories:
- `/src/components`: Reusable React components (e.g., Task, TaskForm).
- `/src/pages`: Main page components (e.g., TaskList, Login, Register).
- `/src/api.js`: Functions for API calls to the backend.

### Backend (`/task-tracker-backend`)
- Built using **Node.js** with **Express.js** for the API.
- Uses **MongoDB** for data storage.
- Implements routes for task management (CRUD operations).

#### Key Backend Directories:
- `/config/db.js`: MongoDB connection setup.
- `/controllers/taskController.js`: Business logic for handling tasks.
- `/models/Task.js`: Mongoose schema for tasks.
- `/routes/taskRoutes.js`: API routes for task operations.
- `/middleware/auth.js`: (Optional) Authentication middleware.

## Technologies Used

### Frontend:
- **React**: Library for building user interfaces.
- **Axios**: For making HTTP requests to the backend API.
- **React Router**: For handling page navigation.
- **CSS**: For styling the components.

### Backend:
- **Node.js**: Server-side JavaScript runtime.
- **Express.js**: Web framework for building APIs.
- **MongoDB**: NoSQL database for storing tasks.
- **Mongoose**: MongoDB object modeling tool.

## Setup Instructions

### Backend Setup:
1. Clone the backend repository:
   ```bash
   git clone <repository-url> task-tracker-backend
   cd task-tracker-backend
