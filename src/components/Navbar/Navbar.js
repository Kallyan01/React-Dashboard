import React from 'react'
import './Navbar.css'
function Navbar() {
    return (
        <div className='navbar'>
            <div className="leftmenu">
                <div className="menuicon">
                    <i class="fas fa-bars"></i>
                </div>
                <div className="text-menu">
                    <li className='active'>Dashboard</li>
                    <li className=''>User</li>
                    <li className=''>Settings</li>
                </div>
            </div>
            <div className="rightmenu">
                <div className="thememode">
                    <div className="light">
                        <i class="fas fa-sun"></i>
                    </div>
                    <div className="dark">
                        <i class="fas fa-moon"></i>
                    </div>
                </div>
                <div className="smartmenu">
                    <li><i class="fas fa-bell"></i><p>1</p></li>
                    <li><i class="fas fa-list-ul"></i><p>8</p></li>
                    <li><i class="fas fa-envelope-open"></i><p>5</p></li>
                </div>
                <div className="user">
                    <div className="userpic">
                        <i class="fas fa-user-circle"></i>
                    </div>
                    <div className="products">
                        <i class="fas fa-th"></i>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar