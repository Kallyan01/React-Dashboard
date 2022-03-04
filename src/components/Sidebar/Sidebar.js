import React, { useContext, useEffect } from 'react'
import './Sidebar.css'
import { GlobalContext } from '../Globalcontext/Globalcontext'
import { NavLink } from 'react-router-dom'
function Sidebar() {
    const { nav, tab } = useContext(GlobalContext)
    const [navOpen, setNavOpen] = nav
    const [Tab, setTab] = tab

    const vis = {
        opacity: navOpen === true ? '1' : '0'
    }

    return (
        <>
            <div className="sidebar-header">
                <div className="control" style={vis}>
                    <h3><span>One</span>Ness</h3>
                </div>
                <div className="side-search" style={vis}>
                    <i class="fal fa-search"></i>
                    <input type="text" placeholder='Search' />
                </div>
            </div>
            <div className="sidebar-body">
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
                <div className="option-catg">
                    <div className="catg">
                        <p>Spaces</p>
                    </div>
                    <div className="extend">
                        <i class="fal fa-chevron-down"></i>
                    </div>
                </div>
                <div className="option-catg">
                    <div className="catg">
                        <p>Docs</p>
                    </div>
                    <div className="extend">
                        <i class="fal fa-chevron-down"></i>
                    </div>
                </div>
                <div className="option-catg">
                    <div className="catg">
                        <p>Settings</p>
                    </div>
                    <div className="extend">
                        <i class="fal fa-chevron-down"></i>
                    </div>
                </div>
            </div>
            <div className="sidebar-footer">
                <div className="user-prev">
                    <div className="user-pro-list">
                        <div className="userav">
                            <i class="fal fa-user-circle"></i>
                        </div>
                        <div className="userav">
                            <i class="fal fa-user-circle"></i>
                        </div>
                    </div>
                    <div className="user-invite">
                        <i class="fal fa-plus"></i>
                        <h6>Invite</h6>
                    </div>
                </div>
                <div className="app-help">
                    <i class="fal fa-question"></i>
                </div>
            </div>
        </>
    )
}

export default Sidebar