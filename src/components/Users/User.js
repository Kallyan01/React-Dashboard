import React from 'react'
import Lineprogress from '../Widgets/Lineprogress'
import './User.css'
function User({name,register,country,usage,payment,pic,lastactive}) {
    return (
        
                <tr>
                    <td scope="row" >
                        <div className='userimg'>
                            <img src={`/userimage/${pic}.jpg`} alt="" />
                        </div>
                    </td>
                    <td >
                        <div className='userdetails'>
                            <p>{name}</p>
                            <p>New | Ragistered : {register}</p>
                        </div>
                    </td>
                    <td >
                        <div className="usercountry">
                            <img src={`/flagimage/${country}.png`} alt="" />
                        </div>
                    </td>
                    <td className="userusage">
                        <Lineprogress value={usage}/>
                    </td>
                    <td>
                        <div className="userpayment">
                            <i class={`fab fa-cc-${payment}`}></i>
                        </div>
                    </td>
                    <td>
                        <div className="useractivity">
                            <p>Last Login</p>
                            <p>{lastactive} ego </p>
                        </div>
                    </td>
                </tr>
      
    )
}

export default User