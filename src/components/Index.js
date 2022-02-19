import React, { useContext, useState } from 'react'
import Navbar from './Navbar/Navbar'
import Userslist from './Users/Userslist'
import './Index.css'
import Sidebar from './Sidebar/Sidebar'
import { GlobalContext } from './Globalcontext/Globalcontext'
import Dashboard from './Dashboard/Dashboard'
import { NavLink, Outlet } from 'react-router-dom'
function Index() {
  const { nav, card, cards } = useContext(GlobalContext)
  const [NavOpen, setNavOpen] = nav
  const cardselect = card
  const cardlist = cards
  const sidebar = {
    // width: `${NavOpen}%`
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