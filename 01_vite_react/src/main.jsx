import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Heading from './App.jsx'

function Para(){
    return(
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero, quam!</p>
    )
} 
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Heading />
    <Para/>
  </StrictMode>,
)


