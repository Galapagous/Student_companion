import React from 'react'
import './questions.scss'
import QuestionComponent from '../QuestionComponent/QuestionComponent'
import Student from '../../assets/dummyData'

function Questions() {
  return (
    <div className='question_container'>
          <h3>Questions</h3>
        <div className="question_main">
          {Student.questionData.map(each_quest=>{
            return(
              <QuestionComponent key={each_quest.id} title='civil litigation'  size='70'/>
            )
          })}
        </div>
    </div>
  )
}

export default Questions