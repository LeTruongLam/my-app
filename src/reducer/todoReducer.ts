// Định nghĩa kiểu dữ liệu cho một to-do item
export interface Todo {
  id: number
  text: string
}

// Định nghĩa kiểu dữ liệu cho state (danh sách các to-do)
export type State = Todo[]

// Định nghĩa kiểu dữ liệu cho các action mà reducer sẽ xử lý
export type Action = { type: 'ADD_TODO'; payload: string } | { type: 'REMOVE_TODO'; payload: number }

// Tạo reducer với kiểu dữ liệu được định nghĩa cho state và action
export const todoReducer = (state: State, action: Action): State => {
  const { type, payload } = action
  switch (type) {
    case 'ADD_TODO':
      console.log('ADD_TODO', payload)
      return [...state, { id: Date.now(), text: payload }]
    case 'REMOVE_TODO':
      console.log('REMOVE_TODO', payload)
      return state.filter((todo) => todo.id !== payload)
    default:
      throw new Error(`Unknown action: ${type}`)
  }
}
