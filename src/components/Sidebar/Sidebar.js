import React, { useContext, useEffect } from 'react'
import './Sidebar.css'
import { GlobalContext } from '../Globalcontext/Globalcontext'
import { NavLink } from 'react-router-dom'
function Sidebar() {
    const { nav, tab } = useContext(GlobalContext)
    const [navOpen, setNavOpen] = nav
    const [Tab, setTab] = tab

        const vis = {
            opacity: navOpen===true?'1':'0'
        }

    return (
        <>

            <div className="control">
                <h3><span>One</span>Ness</h3>
            </div>
            <div className="side-search">
                <i class="fal fa-search"></i>
                <input type="text" placeholder='Search' />

            </div>
            <NavLink to='Dashboard' onClick={() => setTab(1)}>
                <div className="option" style={vis}>
                    <div className="icon"><i class="fal fa-home"></i></div>
                    <div className="option-value"><p>Dashboard</p></div>
                </div>
            </NavLink>
            <NavLink to='ReleaseProject' onClick={() => setTab(2)}>
                <div className="option" style={vis}>
                    <div className="icon"><i class="fal fa-bell"></i></div>
                    <div className="option-value"><p>Release Project</p></div>
                </div>
            </NavLink>
        </>
    )
}

export default Sidebar