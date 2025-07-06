import { useState, useCallback, useEffect } from 'react'
import './App.css'

function App() {
  const [length, setLength] = useState(6)
  const [numberCheck, setNumberCheck] = useState(false)
  const [charCheck, setCharCheck] = useState(false)
  let [password, setPassword] = useState("")

  function copyToClipboard(){
    window.navigator.clipboard.writeText(password)
    alert("password copied!")
  }


  const paswordGenerator = useCallback(() => {
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if (numberCheck) str += "0123456789"
    if (charCheck) str += "!@#$%&*/"
    let pass = ""

    for (let i = 1; i <= length; i++) {
      let index = Math.floor((Math.random() * str.length) + 1)
      pass += str.charAt(index)


    }
    setPassword(pass)

  }, [length, numberCheck, charCheck])

  useEffect(paswordGenerator, [length, numberCheck, charCheck])

  return (
    <>
      <div className=' bg-neutral-900 max-w-svw  p-2.5 rounded-2xl shadow-gray-300 bg-gradient-to-r from-red-700 via-neutral-800 to-neutral-900'>
        <h1 className='text-4xl text-white font-bold'>PASSWORD GENERATOR</h1>
        <div className='m-2 flex flex-row justify-center'>
          <input
            className='bg-white rounded-xl p-2 mx-2 w-xl'
            type="text"
            placeholder='password'
            readOnly
            value={password} />
          <button className='rounded-xl p-1 bg-red-500 text-white font-bold cursor-pointer hover:bg-red-400 shadow-2xs'
          onClick={copyToClipboard}>COPY</button>
        </div>

        <div className='flex justify-around items-center'>

          <div className='flex justify-center items-center gap-1 mx-5'>
            <input type="range"
              value={length}
              onChange={(e) => setLength(e.target.value)}
              min='0'
              max='100' />
            <label className='text-blue-200 font-bold' htmlFor="length">Length({length})</label>
          </div>

          <div className='flex mx-5'>
            <input type="checkbox"
              onChange={() => setNumberCheck((prev) => !prev)} />
            <label htmlFor="numbers" className='text-blue-200 font-bold' >Number</label>
          </div>

          <div className='flex'>
            <input type="checkbox"
              onChange={() => setCharCheck(prev => !prev)} />
            <label htmlFor="numbers" className='text-blue-200 font-bold' >Special Character</label>
          </div>
        </div>


      </div>
    </>
  )
}

export default App
