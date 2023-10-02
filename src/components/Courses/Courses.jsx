import React, { useState } from 'react'
import CourseComponent from '../CourseComponent/CourseComponent'
import './courses.scss'
import { Cancel } from '@mui/icons-material'

function Courses() {
  const [addCouser, setAddCourse] = useState(false)
  return (
    <div className='course_main'>
      <div className="course_top">
      <h3>Courses</h3>
      <button onClick={()=>{setAddCourse(!addCouser)}}>Add Course</button>
      {addCouser && <div className='add_course'>
        <Cancel onClick={()=>{setAddCourse(!addCouser)}}/>
        <form onSubmit={()=>{alert('submission requested')}}>
          <input type="text" placeholder='Title'/>
          <input type="text" placeholder='Description'/>
          <button>Add</button>
        </form>
      </div>}
      </div>
      <div className="course_container">
        {[1,2,3,4,5,6,7].map(each_data=>{
          return(
            <CourseComponent key={each_data} title='Web design' size={each_data}/>
          )
        })}
      </div>
    </div>
  )
}

export default Courses