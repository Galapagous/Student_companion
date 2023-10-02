import React from 'react'
import './profilestat.scss'

function Profile_State({Icon, title, data}) {
  return (
    <div className='profile_container'>
        <div className="left_stat">
            {Icon}
        </div>
        <div className="right_stat">
            <h3>{data}</h3>
            <span>{title}</span>
        </div>
    </div>
  )
}

export default Profile_State