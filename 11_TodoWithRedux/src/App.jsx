import { useEffect, useState } from 'react'
import { useSelector, Provider } from 'react-redux'
import './App.css'
import TodoForm from './components/TodoForm'
import TodoItem from './components/TodoItem'
import Particles from './Particles';
import store from './store/store'


function App() {


  const todos = useSelector(state => state.todos.todos)
  
  // console.log(store.getState())



  return (
    <div>

      <div style={{ width: '100%', height: '600px', position: 'absolute', background: 'sticky', left: 0, top: 0 }}
        >
        <Particles
          particleColors={['#ffffff', '#ffffff']}
          particleCount={200}
          particleSpread={10}
          speed={0.1}
          particleBaseSize={100}
          moveParticlesOnHover={true}
          alphaParticles={false}
          disableRotation={false}
        />
      </div>
      <div style={{ zIndex: '1', position: 'relative' }} className='flex flex-col items-center justify-center gap-5'>

        <h1 className='font-bold text-5xl mb-3 text-center text-white'> MY TODOS </h1>

        <TodoForm />
        <br /><br />
        {todos.map(todo => (
          <div key={todo.id} className='w-full'>
            <TodoItem todo={todo} />
        </div>
      ))}
      </div>
    </div>
  )
}

export default App
