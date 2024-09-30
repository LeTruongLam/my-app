// components/TodoList.tsx

import React from 'react'
import { useTodoContext } from '../context/TodoContext'

const TodoList: React.FC = () => {
  const { state, dispatch } = useTodoContext()
  const handleAddTodo = () => {
    const todoText = prompt('Enter a new todo:')
    if (todoText) {
      dispatch({ type: 'ADD_TODO', payload: todoText })
    }
  }

  return (
    <div>
      <h2>Todo List</h2>
      <ul>
        {state.map((todo) => (
          <li key={todo.id}>
            {todo.text}
            <button onClick={() => dispatch({ type: 'REMOVE_TODO', payload: todo.id })}>Remove</button>
          </li>
        ))}
      </ul>
      <button onClick={handleAddTodo}>Add Todo</button>
    </div>
  )
}

export default TodoList
