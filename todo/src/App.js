import React from 'react';
import './App.css';
import TodoList from './components/TodoList';

function App() {
  return (
    <div className="App">
      <div>
      <h1>App Component</h1>
      <TodoList />
      </div>
    </div>
  );
}

export default App;
