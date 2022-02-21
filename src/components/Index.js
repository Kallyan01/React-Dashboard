import React, { useContext } from 'react'
import Navbar from './Navbar/Navbar'
import './Index.css'
import Sidebar from './Sidebar/Sidebar'
import { GlobalContext } from './Globalcontext/Globalcontext'
import { Outlet } from 'react-router-dom'
function Index() {
  const { nav,screen } = useContext(GlobalContext)
  const [NavOpen] = nav
  const ScreenWidth = window.screen.availWidth
  const sidebar = {
    transform: `translateX(-${NavOpen}%)`,
    width: `${ScreenWidth>=800?20:50}%`

  }
  const bodywidth = {
    transform: ScreenWidth>800?`translate(${NavOpen === 0 ? 20 : 0}%)`:`translate(${NavOpen === 0 ? 50 : 0}%)`,
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