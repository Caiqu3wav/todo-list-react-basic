
import { useEffect, useState } from 'react'
import './App.css'
import { dummyData } from './data/todos'
import AddTodoForm from './components/AddTodoForm'
import TodoList from './components/TodoList'
import TodosSummary from './components/TodosSummary'
import { Todo } from './data/types'

function App() {
  const [todos, setTodos] = useState(() => {
    const savedTodos : Todo[] = JSON.parse(localStorage.getItem("todos") || "[]");
    return savedTodos.length > 0 ? savedTodos : dummyData  
  });

  useEffect(() => {
      localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos])

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
        id: Date.now(),
        title,
        completed: false
      },
      ...prevTodos
    ])
  }

  function deleteTodo(id: number){
    setTodos(prevTodos => prevTodos.filter(todo => todo.id
      !== id
    ))
  }
  
  function deleteAllCompletedTodos() {
    setTodos(prevTodos => prevTodos.filter(todo => !todo.completed))
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
      onDelete={deleteTodo}/>
      <div className='space-y-2'>
        
      </div>
    </div>
    <TodosSummary todos={todos}
    deleteAllCompleted={deleteAllCompletedTodos}/>
    </main>
  )
}

export default App