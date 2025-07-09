import { useEffect, useState } from 'react'
import { useSelector, Provider } from 'react-redux'
import './App.css'
import TodoForm from './components/TodoForm'
import TodoItem from './components/TodoItem'
import { store } from './Store/store'
import Lottie from 'react-lottie-player'
import animationData from './animation/lottie.json'
function App() {


  const todos = useSelector(state => state.todos)



  return (
    <div className='bg-slate-950 flex flex-col items-center justify-center p-4 w-full shadow-lg shadow-black'>

      <h1 className='font-bold text-5xl mb-3 text-center text-white'> MY TODOS </h1>

      <TodoForm />
      <br /><br />
      {todos.map(todo => (
        <div key={todo.id} className='w-full'>
          <TodoItem todo={todo} />
        </div>
      ))}

      <Lottie
        loop
        animationData={animationData}
        play
        className='bottom-0 w-full left-0 right-0 relative'
      />
    </div>
  )
}

export default App
