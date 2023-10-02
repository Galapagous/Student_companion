import React from 'react'
import './leftBar.scss'
import LeftItem from '../LeftItem/LeftItem'
import { BarChart, Book, Dashboard, PowerSettingsNew, QuestionAnswer } from '@mui/icons-material'
import { Link } from 'react-router-dom'

function LeftBar() {
  return (
    <div className='leftbar_container'>
      <Link to='/'>
        <LeftItem Item = {<Dashboard/>} title = 'Dashboard'/>
      </Link>
      <Link to='/course/1'>
        <LeftItem Item = {<Book/>} title = 'Courses'/>
      </Link>
      <Link to='/questions/1'>
        <LeftItem Item = {<QuestionAnswer/>} title = 'Questions'/>
      </Link>
      <Link to='/statistics/1'>
        <LeftItem Item = {<BarChart/>} title = 'Statistics'/>
      </Link>
      <Link to='/login'>
        <LeftItem Item = {<PowerSettingsNew/>} title = 'Logout'/>
      </Link>      
    </div>
  )
}

export default LeftBar