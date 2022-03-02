import React, { useContext, useEffect } from 'react'
import Navbar from './Navbar/Navbar'
import './Index.css'
import Sidebar from './Sidebar/Sidebar'
import { GlobalContext } from './Globalcontext/Globalcontext'
import { Outlet } from 'react-router-dom'

function Index() {
  const { nav, screen } = useContext(GlobalContext)
  const [NavOpen] = nav
  const [ScreenWidth, setScreenWidth] = screen;

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
    width: `${ScreenWidth >= 800 ? 20 : 50}%`
  
  }
  const bodywidth = {
    // width: ScreenWidth > 760 ? `(${NavOpen === 0 ? 20 : 0}%)` : `(${100}%)`,
    width: '100%',
  }
  return (
    <div>
      <Navbar />
      <div className="main">
        <div className="sidebar" style={sidebar}>
          <Sidebar />
        </div>
        <div className="body" style={bodywidth}>
          <Outlet />
        </div>
      </div>
    </div>
  )
}

export default Index