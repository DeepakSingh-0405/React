import { useEffect, useState } from 'react'
import { useSelector, Provider } from 'react-redux'
import './App.css'
import TodoForm from './components/TodoForm'
import TodoItem from './components/TodoItem'
import { store } from './Store/store'

function App() {

  const todos = useSelector(state => state.todos)



  return (
    <>
      <h1 className='font-bold text-5xl mb-3 text-center text-white'> MY TODOS </h1>

      <TodoForm />
      <br /><br />
      {todos.map(todo => (
        <div key={todo.id}>
          <TodoItem todo={todo} />
        </div>
      ))}

    </>
  )
}

export default App
