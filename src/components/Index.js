import React, { useContext, useEffect } from 'react'
import Navbar from './Navbar/Navbar'
import './Index.css'
import Sidebar from './Sidebar/Sidebar'
import { GlobalContext } from './Globalcontext/Globalcontext'
import { Outlet } from 'react-router-dom'

function Index() {
  const { nav, screen } = useContext(GlobalContext)
  const [navOpen] = nav
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
    width: `${ScreenWidth >= 800 ? (navOpen===true?20:0) : (navOpen===true?70:0)}%`
  }
  const bodywidth = {
    width: `${ScreenWidth >= 800 ? (navOpen===true?80:100) : (navOpen===true?100:100)}%`
  }
  return (
      <div className="main">
        <div className="sidebar" style={sidebar}>
          <Sidebar />
        </div>
        <div className="righttab" style={bodywidth}>
          <div className="navmenu">
            <Navbar />
          </div>
          <div className="body" >
            <Outlet />
          </div>
        </div>
      </div>
  )
}

export default Index