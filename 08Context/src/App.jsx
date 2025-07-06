
import React , {useState} from 'react'
import Card from './components/card'
import Login from './components/login'
import UserContextProvider from './context/UserContextProvider'

function App() {
  const [count, setCount] = useState(0)

  return (
    <UserContextProvider >

      <Login />
      <Card />
     
    </UserContextProvider>
  )
}

export default App
