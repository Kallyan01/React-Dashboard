import React from 'react'
import './Lineprogress.css'
function Lineprogress(props) {
    const innerwidth = {
        width: `${props.value}%`
    }
    return (
        <>
            <div className="prog-details">
                <p>{props.value}%</p>
                <p>Jun 11,2021- Jul 10 2021</p>
            </div>
            <div className='lineprogress'>
                <div className="outer">
                    <div className="inner" style={innerwidth}></div>
                </div>
            </div>
        </>
    )
}

export default Lineprogress