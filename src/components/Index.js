import React, { useContext} from 'react'
import Navbar from './Navbar/Navbar'
import './Index.css'
import Sidebar from './Sidebar/Sidebar'
import { GlobalContext } from './Globalcontext/Globalcontext'
import {  Outlet } from 'react-router-dom'
function Index() {
  const { nav} = useContext(GlobalContext)
  const [NavOpen] = nav

  const sidebar = {
    transform: `translateX(-${NavOpen}%)`
  }
  const bodywidth = {
    width: `100%`
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