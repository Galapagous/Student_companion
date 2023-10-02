import React from 'react'
import './layout.scss'
import { Outlet } from 'react-router-dom'
import LeftBar from '../Leftbar/LeftBar'
import Navbar from '../Navbar/Navbar'

function Layout() {
  return (
    <div className='layout_container'>
      <Navbar/>
      <div className='layout_main'>
        <div className='left_side'>
            <LeftBar/>
        </div>
        <div className='right_side'>
            <Outlet/>
        </div>
      </div>
      </div>
  )
}

export default Layout