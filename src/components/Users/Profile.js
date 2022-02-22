import React from 'react'
import './Profile.css'
function Profile() {
    return (
        <div className='profile'>
            <div className="pro-image">
                <img src="/userimage/user6.jpg" alt="" />
            </div>
            <div className="pro-info">
                <div className="pro-name">
                    Raghab Roy
                </div>
                <div className="pro-role">Admin</div>
            </div>
            <div className="pro-controll">
                <button>Settings</button>
                <button>Sign Out</button>
            </div>
        </div>
    )
}

export default Profile