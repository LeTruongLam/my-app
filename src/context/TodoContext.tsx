// context/TodoContext.tsx

import React, { createContext, useReducer, ReactNode, useContext } from 'react'
import { todoReducer, State, Action } from '../reducer/todoReducer'

// Định nghĩa kiểu dữ liệu cho context
interface TodoContextType {
  state: State
  dispatch: React.Dispatch<Action>
}

// Khởi tạo context với giá trị mặc định
const TodoContext = createContext<TodoContextType | undefined>(undefined)

// Định nghĩa kiểu dữ liệu cho props của TodoProvider
interface TodoProviderProps {
  children: ReactNode
}

// Tạo TodoProvider để cung cấp context cho các thành phần con
export const TodoProvider = ({ children }: TodoProviderProps) => {
  const [state, dispatch] = useReducer(todoReducer, []) // Mảng trống là giá trị khởi tạo

  return <TodoContext.Provider value={{ state, dispatch }}>{children}</TodoContext.Provider>
}

// Hook để dễ dàng sử dụng context trong các thành phần con
export const useTodoContext = (): TodoContextType => {
  const context = useContext(TodoContext)
  if (!context) {
    throw new Error('useTodoContext must be used within a TodoProvider')
  }
  return context
}
