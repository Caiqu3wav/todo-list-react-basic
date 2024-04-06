
import { useState } from 'react'
import './App.css'
import TodoItem from './components/TodoItem'
import { dummyData } from './data/todos'
import AddTodoForm from './components/AddTodoForm'
import TodoList from './components/TodoList'

function App() {
  const [todos, setTodos] = useState(dummyData);

  function setCompleted(id: number, completed: boolean){
    setTodos((prevTodos) => 
      prevTodos.map(todo => (
        todo.id === id ? {...todo, completed} : todo
      )))
    alert(`Todo ${id} is now ${completed ? "completed" : "incomplete"}`)
  }

  function addTodo(title: string) {
    setTodos(prevTodos => [
      {
        id: prevTodos.length + 1,
        title,
        completed: false
      },
      ...prevTodos
    ])
  }


  return (
    <main className='py-10 h-screen flex flex-col w-full space-y-5'>
    <h1 className='font-bold text-center'>Your Todos</h1>
    <div className='max-w-lg mx-auto bg-slate-100 rounded-md p-5'>
      <AddTodoForm
      onSubmit={addTodo}/>
      <TodoList
      todos={todos}
      onCompletedChange={setCompleted}
      onDelete={}/>
      <div className='space-y-2'>
        
      </div>
    </div>
    </main>
  )
}

export default App