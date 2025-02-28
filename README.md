# To-Do Application (Django + React)

## Overview
This is a simple **To-Do Application** built using **Django (Backend) and React (Frontend)**. It allows users to create, view, update, and delete to-do tasks with a REST API and a user-friendly interface.

## Features
- **Create a To-Do**: Add a new to-do task with a title and description.
- **Read To-Dos**: Fetch and display a list of to-dos.
- **Update a To-Do**: Edit a to-do's title and mark it as completed or pending.
- **Delete a To-Do**: Remove a to-do from the list.
- **Filter Tasks**: View all, completed, or pending tasks.
- **Styled UI**: Enhanced with CSS for a better user experience.

## Tech Stack
### Backend:
- Django
- Django REST Framework (DRF)
- SQLite (default, but can be replaced with PostgreSQL or MySQL)

### Frontend:
- React.js
- Axios (for API calls)
- React Hooks (`useState`, `useEffect`)
- CSS for styling

## Project Structure
To-Do-Application/ │-- backend/ # Django Backend │ ├── todo/ # Todo App │ │ ├── migrations/ # Database Migrations │ │ ├── models.py # Database Schema │ │ ├── views.py # API Logic │ │ ├── serializers.py # DRF Serializers │ │ ├── urls.py # API Endpoints │ ├── settings.py # Django Configuration │ ├── urls.py # Main URLs │ ├── manage.py # Django CLI │ │-- frontend/ # React Frontend │ ├── src/ │ │ ├── components/ # UI Components │ │ ├── App.js # Main App Component │ │ ├── index.js # Entry Point │ │ ├── api.js # API Calls with Axios │ │ ├── styles.css # CSS Styles │ ├── package.json # Dependencies │ ├── .env # API URL Config │ │-- README.md 

# Project

## Getting Started
### 1. Clone the Repository

git clone https://github.com/yourusername/todo-app.git
cd todo-app

## Backend Setup (Django)
### 2. Navigate to the backend folder
cd backend

### 3. Create a Virtual Environment & Activate It
python -m venv venv  # Windows: python -m venv venv
source venv/bin/activate  # Windows: venv\Scripts\activate

### 4. Install Dependencies
pip install -r requirements.txt

### 5. Apply Migrations & Start Server
python manage.py migrate
python manage.py runserver

By default, the Django server runs at http://localhost:8000.

## Frontend Setup (React)
### 6. Navigate to the frontend folder
cd ../frontend
cd todo-app

### 7. Install Dependencies
npm install

### 8. Start the React App
npm start

By default, the React app runs at http://localhost:3000.


## API Endpoints

| Method | Endpoint         | Description              |
|--------|-----------------|--------------------------|
| GET    | `/api/todos/`    | Fetch all to-dos        |
| POST   | `/api/todos/`    | Create a new to-do      |
| GET    | `/api/todos/:id/` | Fetch a specific to-do  |
| PUT    | `/api/todos/:id/` | Update a to-do          |
| DELETE | `/api/todos/:id/` | Delete a to-do          |