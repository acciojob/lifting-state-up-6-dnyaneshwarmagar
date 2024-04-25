
import React, { useState } from 'react';
import './../styles/App.css';
import TodoList from './TodoList';

const App = () => {
  // Initialize todos state with an array of todo items
  const [todos, setTodos] = useState([
    { id: 1, text: 'Learn React', completed: false },
    { id: 2, text: 'Build a React app', completed: false },
    { id: 3, text: 'Deploy React app', completed: false }
  ]);

  // Function to update the completion state of a todo item
  const handleComplete = (id) => {
    setTodos(todos.map(todo => {
      if (todo.id === id) {
        return { ...todo, completed: true };
      }
      return todo;
    }));
  };

  return (
    <div className="App">
      <h1>Todo List</h1>
      {/* Pass down todos state and handleComplete function to TodoList component */}
      <TodoList todos={todos} handleComplete={handleComplete} />
    </div>
  );
}

export default App;
