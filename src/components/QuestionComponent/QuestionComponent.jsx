import { Folder } from '@mui/icons-material'
import './questionComponent.scss'
import React from 'react'
import { Link } from 'react-router-dom'

function QuestionComponent({title, size}) {
  return (
    <div className='quescomp_container'>
          <p>{size}% complete</p>
          <div className="status">
            <div className="done" style={{backgroundColor:`${(parseInt(size) < 50) ? 'red' : parseInt(size) === 100 ? 'green' : 'yellow'}`, width: `${size}%`, height: '5px', borderRadius:'3px'}}></div>
          </div>
        <div className="quescomp_main">
            <Folder/>
            <h3>{title}</h3>
          <button>
          <Link to='/test/1'>Take test</Link>
          </button>
        </div>
    </div>
  )
}

export default QuestionComponent