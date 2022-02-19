import React, { useState, useEffect } from 'react'
import User from './User'
import axios from 'axios'
import Userlabel from './Userlabel'
import './Userlist.css'
function Userslist() {
    const [Data, setData] = useState([])

    useEffect(() => {
        axios.get("/Userdata.json")
            .then(data => {
                setData(data.data)
            })
            .catch(err => { console.log(err) })
    }, [])
    console.log(Data)
    return (
        <table class="table table-hover ">
            <thead>
                <Userlabel />
            </thead>
            <tbody>
                {
                    Data.map((e, idx) => {
                        return <User key={idx} pic={e.pic} name={e.name} register={e.register} country={e.country} usage={e.usage} payment={e.payment} lastactive={e.activity} />
                    })
                }
            </tbody>
        </table>
    )
}

export default Userslist