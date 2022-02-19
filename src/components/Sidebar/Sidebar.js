import React, { useContext } from 'react'
import './Sidebar.css'
import { GlobalContext } from '../Globalcontext/Globalcontext'
import { NavLink } from 'react-router-dom'
function Sidebar() {
    const { nav } = useContext(GlobalContext)
    const [NavOpen, setNavOpen] = nav
    return (
        <>

            <div className="control">
                <div className="menuicon" onClick={() => setNavOpen(100)}>
                    <i class="fas fa-times"></i>
                </div>
            </div>
            <NavLink to='Dashboard'>
                <div className="option">
                    <div className="icon"><i class="fas fa-home"></i></div>
                    <div className="option-value">Dashboard</div>
                </div>
            </NavLink>
            <NavLink to='ReleaseProject'>
                <div className="option">
                    <div className="icon"><i class="fas fa-bell"></i></div>
                    <div className="option-value">Release Project</div>
                </div>
            </NavLink>
        </>
    )
}

export default Sidebar