import React, { useContext, useEffect } from 'react'
import Navbar from './Navbar/Navbar'
import './Index.css'
import Sidebar from './Sidebar/Sidebar'
import { GlobalContext } from './Globalcontext/Globalcontext'
import { Outlet } from 'react-router-dom'
import Profile from './Users/Profile'
function Index() {
  const { nav, screen,pro } = useContext(GlobalContext)
  const [NavOpen] = nav
  const [ScreenWidth, setScreenWidth] = screen;
  const [Showpro] = pro
  useEffect(() => {
    window.addEventListener('resize', scrn)
    return () => {
      window.removeEventListener('resize', scrn)
    }
  }, [ScreenWidth])
  function scrn() {
    setScreenWidth(window.screen.availWidth)
  }
  const sidebar = {
    transform: `translateX(-${NavOpen}%)`,
    width: `${ScreenWidth >= 850 ? 20 : 50}%`
    // width: ScreenWidth>800?`${NavOpen === 0 ? 20 : 0}%`:`${NavOpen === 0 ? 50 : 0}%`

  }
  const bodywidth = {
    transform: ScreenWidth > 800 ? `translate(${NavOpen === 0 ? 20 : 0}%)` : `translate(${NavOpen === 0 ? 50 : 0}%)`,
    // width: ScreenWidth>800?`${NavOpen === 0 ? 80 : 100}%`:`${NavOpen === 0 ? 100 : 100}%`,

  }


  return (
    <div>
      <Navbar />
      <div className="main">
        <div className="sidebar" style={sidebar}>
          <Sidebar />
        </div>
        <div className="body" style={bodywidth}>
          {Showpro===true? <Profile /> : ''
          
          }
          <Outlet />
        </div>
      </div>
    </div>
  )
}

export default Index