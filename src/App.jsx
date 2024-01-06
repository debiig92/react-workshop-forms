import './App.css'
import CreateTodo from './components/CreateTodo'
import Todo from './components/Todo'
import { TodoProvider } from './context/TodoProvider'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
function App() {
  return (
    <>
      <TodoProvider>
        <Router>
          <Routes>
            <Route path="/" element={<Todo />} />
            <Route path="/create-todo" element={<CreateTodo />} />
          </Routes>
        </Router>
      </TodoProvider>
    </>
  )
}

export default App
