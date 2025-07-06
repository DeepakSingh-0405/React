import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router'
import './index.css'
import App from './App.jsx'
import Layout from "./Layout.jsx"
import Home from './components/Home/Home.jsx'
import Contact from './components/Contact/Contact.jsx'
import About from './components/About/About.jsx'
import Github, { loaderData } from './components/Github/Github.jsx'
import UserParams from './components/UserParams/UserParams.jsx'


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='' element = {<Layout/>}>
      <Route path='/home' element = {<Home/>}/>
      <Route path='/contact' element = {<Contact/>}/>
      <Route path='/about' element = {<About/>}/>
      <Route 
      path='/github' 
      element = {<Github/>}
      loader = {loaderData}
      />
      <Route path='/user/:params' element = {<UserParams/>}/>

    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router = {router} />
  </StrictMode>,
)
