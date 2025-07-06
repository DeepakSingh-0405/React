import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './Components/Card'
import ToggleBtn from './Components/ToggleBtn'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='text-bold text-5xl'>Theme Toggler</h1>
      <Card/>
      <ToggleBtn />
    </>
  )
}

export default App
