import React from 'react'
import './Userlabel.css'
function Userlabel() {
  return (
    <tr>
      <th scope="col" style={{ width: '5%', textAlign: 'center' }}><i class="fas fa-user"></i></th>
      <th scope="col" style={{ width: '20%' }}>User</th>
      <th scope="col" style={{ width: '10%', textAlign: 'center' }}>Country</th>
      <th scope="col" style={{ width: '35%' }}>Usage</th>
      <th scope="col" style={{ width: '20%', textAlign: 'center' }}>Payment Method</th>
      <th scope="col" style={{ width: '10%' }}>Activity</th>
    </tr>
  )
}

export default Userlabel