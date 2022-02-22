import React, { useContext } from 'react'
import './Sidebar.css'
import { GlobalContext } from '../Globalcontext/Globalcontext'
import { NavLink } from 'react-router-dom'
function Sidebar() {
    const { nav,tab } = useContext(GlobalContext)
    const [NavOpen, setNavOpen] = nav
    const [Tab,setTab]=tab
    return (
        <>

            <div className="control">
                <div className="menuicon" onClick={() => setNavOpen(100)}>
                    <i class="fas fa-times"></i>
                </div>
            </div>
            <NavLink to='Dashboard' onClick={()=>setTab(1)}>
                <div className="option">
                    <div className="icon"><i class="fas fa-home"></i></div>
                    <div className="option-value"><p>Dashboard</p></div>
                </div>
            </NavLink>
            <NavLink to='ReleaseProject' onClick={()=>setTab(2)}>
                <div className="option">
                    <div className="icon"><i class="fas fa-bell"></i></div>
                    <div className="option-value"><p>Release Project</p></div>
                </div>
            </NavLink>
        </>
    )
}

export default Sidebar