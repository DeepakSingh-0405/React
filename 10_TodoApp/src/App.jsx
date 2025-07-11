import { useEffect, useState } from 'react'
import { TodoContextProvider } from './context'
import './App.css'
import TodoForm from './components/TodoForm'
import TodoItem from './components/TodoItem'

function App() {

  const [todos, setTodos] = useState([])

  const addTodo = (todo)=>{
    setTodos((prev)=>[{id: Date.now(), ...todo}, ...prev])
  }

  const updateTodo = (id,todo)=>{
    setTodos((prev)=>(prev.map((prevTodo)=>(prevTodo.id === id ? todo: prevTodo ))))
  }

  const toggleTodo = (id)=>{
    setTodos((prev)=>(prev.map((todo)=>(todo.id === id ? {...todo, checked:!todo.checked}: todo))))

  }

  const deleteTodo = (id)=>{
    setTodos((prev)=>(prev.filter((todo)=>(todo.id !== id))))
  }


    useEffect(()=>{
        const todos = JSON.parse(localStorage.getItem("todo"))

        if(todos && todos.length>0)
          setTodos(todos)
    },[])

    useEffect(()=>{
      localStorage.setItem("todo",JSON.stringify(todos))
    },[todos])
    
  return (
    <TodoContextProvider value = {{todos, addTodo, updateTodo, toggleTodo, deleteTodo}}>

      <div className="bg-[#172842] min-h-screen py-8 ">
                <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
                    <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
                    <div className="mb-4">
                        <TodoForm /> 
                    </div>
                    <div className="flex flex-wrap gap-y-3">
                        {todos.map((todo)=>(
                          <div key={todo.id}
                          className='w-full'
                          >
                            <TodoItem todo={todo} />
                          </div>
                        ))}
                    </div>
                </div>
            </div>
    </TodoContextProvider>
  )
}

export default App
