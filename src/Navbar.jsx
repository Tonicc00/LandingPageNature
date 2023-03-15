import {Outlet, Link} from 'react-router-dom'
import {FaBars} from 'react-icons/fa'
import { useState } from 'react'


export const Navbar = () => {
  const [menu, showMenu] = useState(false);

  return (
    <>
       <nav className='nav-bar'>
        <ul>
          <li className='closed-nav'>
            <FaBars style={{cursor:'pointer'}} onClick={() => showMenu(currentShow => !currentShow)} />
            {menu 
            ? <ul className='open-nav'>
                <li><Link className='nav-link' to='/'>Home</Link></li>
                <li><Link className='nav-link' to='/projects'>Projects</Link></li>
              </ul> 
            : null }
          </li>
        </ul>
      </nav>
      <Outlet />
    </>
  )
}