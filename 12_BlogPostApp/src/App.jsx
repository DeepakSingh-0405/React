
import { useEffect, useState } from 'react'
import conf from './config/config'
import authService from './appwrite/auth'
import {useDispatch} from 'react-redux'
import { Outlet } from 'react-router-dom'
import { login, logout } from './Slices/authSlice'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'

function App() {
  const dispatch = useDispatch()
  const [loading, setLoading] = useState(true)
  useEffect(()=>{
    authService.getUser().then((userdata)=>{
      if(userdata){
        dispatch(login({userdata}))
      }
      else dispatch(logout())
    }).catch((error)=> console.log(error))
    .finally(()=>setLoading(false))
  },[])

  return !loading ? (
    <>
    <div className='h-screen w-full bg-slate-900 text-white flex flex-col justify-between items-center'>
      <Header />
      <Outlet />
      <Footer />
    </div>
    </>
  ): (null)
}

export default App
