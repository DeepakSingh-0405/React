import { useContext, useEffect, useState } from 'react'
import './App.css'
import Card from './Components/Card'
import ToggleBtn from './Components/ToggleBtn'
import {ThemeContextProvider} from './context/ThemeContext'

function App() {
    const [themeMode, setThemeMode] = useState("light")
    // const {themeMode, lightTheme, darkTheme} = useTheme()

    const lightTheme = ()=>{
      setThemeMode("light")
    }
    const darkTheme = ()=>{
      setThemeMode("dark")
    }

    useEffect(()=>{
        document.querySelector("html").classList.remove("light", "dark")
        document.querySelector("html").classList.add(themeMode)
    },[themeMode])
  
  return (
    
      <ThemeContextProvider value={{themeMode, lightTheme, darkTheme}} >
      <h1 className='font-extrabold text-5xl m-5'>Theme Toggler</h1>
      <Card/>
      <br />
      <ToggleBtn />
      </ThemeContextProvider >
    
  )
}

export default App

