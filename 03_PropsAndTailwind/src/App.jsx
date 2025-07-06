import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {

  return (
    <>
     <h1 className= 'bg-white text-black p-5 rounded-xl mb-10'>React with Tailwind CSS</h1>
     <div className='flex gap-5'>
     <Card username = 'Deepak' description = 'Hello, this is a card'/>
     <Card username = 'hehe' description = 'haahhahahahahahh'/>
     <Card username = 'Vanshu' />
     </div>
    </>
  )
}

export default App
