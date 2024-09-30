import TodoList from './components/TodoList'
import { TodoProvider } from './context/TodoContext'

function App() {
  return (
    <div>
      <TodoProvider>
        <TodoList />
      </TodoProvider>
    </div>
  )
}

export default App
