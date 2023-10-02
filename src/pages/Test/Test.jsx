import React from 'react'
import './test.scss'
import { ArrowBack, ArrowForward, Check, PowerSettingsNew } from '@mui/icons-material'
import { Link } from 'react-router-dom'
import Student from '../../assets/dummyData'
import { useState } from 'react'

function Test() {
    const quest = Student.questionData
    let [num, setNum] = useState(0)
    const handleNav = (e)=>{
        if(e.target.innerText==='Previous'){
            quest[num - 1] && setNum(num - 1)
        }else{
            quest[num + 1] && setNum(num + 1)
        }
    }
  return (
    <div className='test_container'>
        <div className="test_main">
            <div className="test_info">
                <h3>Memoization</h3>
                <div className="status">
                    <div className="status_body">
                        <div className="status_content" style={{width:`${20}%`}}></div>
                    </div>
                    <p>20%</p>
                </div>
                <button className="quitter"><Link to='/questions/1'><PowerSettingsNew/><span>Quit</span></Link></button>
            </div>
                <div className="test_body">
                    <p>{`Question ${num + 1}`}</p>
                    <p className='main_question'>{quest[num].quests}</p>
                    <ul>
                        {quest[num].option.map(each_option=>{
                            return(
                                <li>{each_option.value}<div className="select"><Check/></div></li>
                            )
                        })}
                    </ul>
                </div>
            <div className="test_navigate">
                <button onClick={(e=>{handleNav(e)})}><ArrowBack/> Previous</button>
                <button onClick={(e=>{handleNav(e)})}>Next<ArrowForward/></button>
            </div>
        </div>
    </div>
  )
}

export default Test