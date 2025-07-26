import React from 'react'
import {useSelector} from 'react-redux'
import { useNavigate , Link} from 'react-router-dom'
import {Logo, LogoutBtn} from '../index'

function Header() {
  const authStatus = useSelector(state => state.auth.status)
  const navigate = useNavigate()

  const navItems = [
    {name: 'Home',
      path:'/',
      active: authStatus
    },
    {name: 'Add post',
      path:'/add-post',
      active: authStatus
    },
    {name: 'All Posts',
      path:'/posts',
      active: authStatus
    },
    {name: 'SignUp',
      path:'/SignUp',
      active: !authStatus
    },
    {name: 'Login',
      path:'/login',
      active: !authStatus
    }
  ]

  return (
    <div className='bg-slate-800 w-full'>
      <nav className='flex justify-between items-center p-4 bg-slate-800 text-white'>
        <div>
          <Link to ="/logo" >
            <Logo />
          </Link>
        </div>
        <div >
          <ul className='flex gap-5'>
            {navItems.map((item)=>(
              item.active ? (
                <li key = {item.name}>
                  <button
                    onClick={() => navigate(item.path)}
                    className='text-white hover:underline'
                  >{item.name}</button>
                </li>
              ): null
            ))}
            {authStatus && (
              <li>
                <LogoutBtn />
              </li>
            )}
          </ul>

        </div>


      </nav>
    </div>
  )
}

export default Header

