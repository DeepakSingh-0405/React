import { useState } from 'react'//these are hooks
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  //These are hooks which is used to sync the changes with UI at multiple places on the web page
  let [counter, setCounter] = useState(0)

  const addCounter = ()=>{
    if(counter < 20) setCounter(counter + 1);
  }

  const removeCounter = ()=>{
    if(counter > 0) setCounter(counter - 1);
  }

  return (
    <>
      <h1>Mini Counter Project with React hooks</h1>
      <h2>Counter: {counter}</h2>
      <button onClick={addCounter} >Increase counter {counter}</button>
      <br /><br />
      <button onClick={removeCounter}>Decrease counter {counter}</button>
      <p>Another place of updation : {counter}</p>
    </>
  )
}

export default App
