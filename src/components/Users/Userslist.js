import React from 'react'
import User from './User'
import Userlabel from './Userlabel'

function Userslist() {
    return (
        <div className='users'>
           <Userlabel/>
           <User/>
        </div>
    )
}

export default Userslist