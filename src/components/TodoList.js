import React from 'react';

function TodoList({ todos, handleComplete }) {
    console.log(todos);
  return (
    <div>
      <h2>Todo Items:</h2>
      <ul>
        {/* Map through todos array and render each todo item */}
        {todos.map(todo => (
          <li key={todo.id}>
            {/* Render todo text */}
            {todo.text}
            {/* Render "complete" button for items not yet completed */}
            {todo.completed ?"" : (
              <button onClick={() => handleComplete(todo.id)}>Complete</button>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
