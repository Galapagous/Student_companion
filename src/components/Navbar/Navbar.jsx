import React from 'react'
import './navbar.scss'
import { LogoDev, Person} from '@mui/icons-material'

function Navbar() {
  return (
    <div className='navbar_container'>
        <div className="left_nav">
            <LogoDev/>
            <h2>Galapagous</h2>
        </div>
        <div className="right_nav">
            <h3>Hello Musa</h3>
            <Person/>
        </div>
    </div>
  )
}

export default Navbar