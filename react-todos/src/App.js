import React, {useState} from 'react';
import './App.css';
import TodoTable from './components/TodoTable';
import NewTodoForm from './components/NewTodoForm';

function App() {

  const [todos, setTodos] = useState(
    [
      {rowNumber: 1, rowDescription: "Feed puppy", rowAssigned: "User 1"},
      {rowNumber: 2, rowDescription: "Water plants", rowAssigned: "User 2"},
      {rowNumber: 3, rowDescription: "Make dinner", rowAssigned: "User 1"},
      {rowNumber: 4, rowDescription: "Chargep phone battery", rowAssigned: "User 1"}
    ]
  )

  const deleteTodo = () => {
    if(todos.length > 0) {
      todos.pop()
      setTodos(todos => [...todos])
    }
  }

  const addTodo = (description, assigned) => {
    if(todos.length > 0) {
      const newTodo = {
        rowNumber: todos.length + 1,
        rowDescription: description,
        rowAssigned: assigned
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
          <button type='button' className='btn btn-danger mt-3' onClick={deleteTodo}>Delete</button>
          <NewTodoForm addTodo={addTodo} />
        </div>
      </div>
    </div>
  );
}

export default App;