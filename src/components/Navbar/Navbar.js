import React,{useContext} from 'react'
import './Navbar.css'
import { GlobalContext } from '../Globalcontext/Globalcontext'
function Navbar() {
    const {nav,tab} = useContext(GlobalContext)
    const [navOpen, setNavOpen]= nav
    const [Tab,setTab]= tab
    console.log(navOpen)
    return (
        <div className='navbar'>
            <div className="leftmenu">
                <div className="menuicon" onClick={()=>setNavOpen(!navOpen)}>
                    <i className={navOpen===true?'fas fa-times':'fas fa-bars'}></i>
                </div>
                <div className="text-menu">
                    <li className='active'>{Tab===1?"Dashboard":"Release Project"}</li>
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
                <div className="admin">
                    <div className="adminpic">
                        <img src="/userimage/user6.jpg" alt="" />
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