import { useState } from 'react'
import Button from './Buttons'

function App() {
  const [color, setColor] = useState("Black")

  return (
    <>
 <div className='m-0 p-0 h-screen w-screen flex flex-col  align-center justify-end duration-200'
 style={{backgroundColor : color}}>
  <div className=' bg-white mx-10 mb-20 p-2.5 text-black flex flex-wrap rounded-3xl justify-around gap-y-2 gap-x-2'>
    <Button buttonText= 'red' color = {(e)=>setColor(e)}/>
    <Button buttonText= 'blue' color = {(e)=>setColor(e)}/>
    <Button buttonText= 'white' textcolor='black' color = {(e)=>setColor(e)}/>
    <Button buttonText= 'lavender' textcolor='black' color = {(e)=>setColor(e)}/>
    <Button buttonText= 'olive' color = {(e)=>setColor(e)}/>
    <Button buttonText= 'crimson' color = {(e)=>setColor(e)}/>
    <Button buttonText= 'green' color = {(e)=>setColor(e)}/>
    <Button buttonText= 'pink' textcolor='black' color = {(e)=>setColor(e)}/>
    <Button buttonText= 'yellow' color = {(e)=>setColor(e)}/>
    <Button buttonText= 'black' color = {(e)=>setColor(e)}/>
  </div>

 </div>
    </>
  )
}

export default App
