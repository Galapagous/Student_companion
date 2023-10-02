import { Folder } from '@mui/icons-material'
import './courseComponent.scss'
import React from 'react'
import { Link } from 'react-router-dom'

function CourseComponent({title, size}) {
  return (
    <div className='component_container'>
        <div className="component_main">
          <Link to='/single_course/1'>
            <Folder/>
            <h3>{title}</h3>
            <p>{size} Files</p>
          </Link>
        </div>
    </div>
  )
}

export default CourseComponent