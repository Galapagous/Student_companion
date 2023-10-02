import { Add, Delete, PictureAsPdfSharp, Update, Upload } from '@mui/icons-material'
import React, { useState } from 'react'
import './singleCourse.scss'
import { Link } from 'react-router-dom'

function SIngleCourse() {
  const [addFile, setAddFile] = useState(false)
  const handleUpload = (e)=>{
    e.preventDefault()
    alert('hello')
  }
  return (
    <div className='single_container'>
      <div className='single_main'>
        <div className="single_top">
          <h3>Web developmemt</h3>
          <Add onClick={()=>{setAddFile(!addFile)}}/>
          {addFile && <div className='add_course'>
          <form onSubmit={()=>{alert('submission requested')}}>
            <label htmlFor='file'><Upload/></label>
            <input id='file' type="file" onChange={handleUpload}/>
            <button>Add</button>
          </form>
        </div>}
        </div>
        <div className="single_content">
          {[1,2,3,4,5,6,7,8,9,12,13,14].map(each_file=>{
            return(
              <div className="file" key={each_file}>
                <div className="left"><p>Memoization</p></div>
                <div className="center"><PictureAsPdfSharp style={{color: 'white'}}/></div>
                <p>{each_file}Mb</p>
                <div className="right">
                <Update onClick={()=>{alert('update requested')}}/>
                <Delete onClick={()=>{alert('delete requested')}}/>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default SIngleCourse