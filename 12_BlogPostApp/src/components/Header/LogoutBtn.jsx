import React from 'react'
import authService from '../../appwrite/auth'
import { useDispatch } from 'react-redux'
import { logout } from '../../Slices/authSlice'

function LogoutBtn() {
    const dispatch = useDispatch()
    const handleLogout = () => {
        authService.logout().then(()=>{
            dispatch(logout())
        })
        .catch((error) => console.log(error))
    }

  return (
    <button 
    classname='bg-red-700 hover:bg-red-800 text-white' 
    onClick={handleLogout}
    >
      Logout
    </button>
  )
}

export default LogoutBtn