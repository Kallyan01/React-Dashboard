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
                <h3><span>One</span>Ness</h3>
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