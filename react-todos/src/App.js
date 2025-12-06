import React, {useState} from 'react';
import './App.css';
import TodoTable from './components/TodoTable';

function App() {

  const [todos, setTodos] = useState(
    [
      {rowNumber: 1, rowDescription: "Feed puppy", rowAssigned: "User 1"},
      {rowNumber: 2, rowDescription: "Water plants", rowAssigned: "User 2"},
      {rowNumber: 3, rowDescription: "Make dinner", rowAssigned: "User 1"},
      {rowNumber: 4, rowDescription: "Chargep phone battery", rowAssigned: "User 1"}
    ]
  )

  const addTodo = () => {
    if(todos.length > 0) {
      const newTodo = {
        rowNumber: todos.length + 1,
        rowDescription: "Wubba Lubba dub dub",
        rowAssigned: "Rick Sanchez"
      }

      setTodos(todos => [...todos, newTodo])
    }
  }

  return (
    <div className='mt-5 container'>
      <div className='card'>
        <div className='card-header'>
          Your Todo's
        </div>
        <div className='card-body'>
          <TodoTable todos={todos} />
          <button className='btn btn-primary' onClick={addTodo}>
            Add Todo
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;