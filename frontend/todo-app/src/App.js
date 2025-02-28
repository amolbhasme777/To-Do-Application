import React, { useState, useEffect } from 'react';
import { getTodos, addTodo, updateTodo, deleteTodo } from './api';
import './App.css';

function App() {
    const [todos, setTodos] = useState([]);
    const [newTodo, setNewTodo] = useState({ title: '', body: '' });
    const [filter, setFilter] = useState('all'); // 'all', 'completed', 'pending'
    const [editingId, setEditingId] = useState(null); // Track the ID of the todo being edited
    const [editTitle, setEditTitle] = useState(''); // Track the new title when editing

    useEffect(() => {
        fetchTodos();
    }, []);

    const fetchTodos = async () => {
        const response = await getTodos();
        setTodos(response.data);
    };

    const handleAddTodo = async () => {
        if (newTodo.title.trim() === '') return;
        await addTodo(newTodo);
        setNewTodo({ title: '', body: '' });
        fetchTodos();
    };

    const handleUpdateTodo = async (todo) => {
        await updateTodo(todo.id, { ...todo, completed: !todo.completed });
        fetchTodos();
    };

    const handleEditTodo = (todo) => {
        setEditingId(todo.id);
        setEditTitle(todo.title);
    };

    const handleSaveEdit = async (todo) => {
        if (editTitle.trim() === '') return;
        await updateTodo(todo.id, { ...todo, title: editTitle });
        setEditingId(null);
        fetchTodos();
    };

    const handleDeleteTodo = async (id) => {
        await deleteTodo(id);
        fetchTodos();
    };

    const filteredTodos = todos.filter(todo => {
        if (filter === 'completed') return todo.completed;
        if (filter === 'pending') return !todo.completed;
        return true; // 'all'
    });

    return (
        <div className="container">
            <h1>To-Do List</h1>
            <input 
                type="text" 
                placeholder="Title" 
                value={newTodo.title} 
                onChange={(e) => setNewTodo({ ...newTodo, title: e.target.value })}
            />
            <input 
                type="text" 
                placeholder="Body" 
                value={newTodo.body} 
                onChange={(e) => setNewTodo({ ...newTodo, body: e.target.value })}
            />
            <button onClick={handleAddTodo}>Add To-Do</button>

            <div className="filter-buttons">
                <button onClick={() => setFilter('all')}>Show All</button>
                <button onClick={() => setFilter('completed')}>Show Completed</button>
                <button onClick={() => setFilter('pending')}>Show Pending</button>
            </div>

            <ul>
                {filteredTodos.map(todo => (
                    <li key={todo.id} className={`todo-item ${todo.completed ? 'completed' : ''}`}>
                        {editingId === todo.id ? (
                            <>
                                <input 
                                    type="text" 
                                    value={editTitle} 
                                    onChange={(e) => setEditTitle(e.target.value)} 
                                />
                                <button onClick={() => handleSaveEdit(todo)}>Save</button>
                                <button onClick={() => setEditingId(null)}>Cancel</button>
                            </>
                        ) : (
                            <>
                                <span onClick={() => handleUpdateTodo(todo)}>
                                    {todo.title}
                                </span>
                                <button onClick={() => handleEditTodo(todo)}>Edit</button>
                                <button onClick={() => handleDeleteTodo(todo.id)}>Delete</button>
                            </>
                        )}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default App;