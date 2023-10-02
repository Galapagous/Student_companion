import React, { useEffect, useState } from 'react'
import './singleStat.scss'
import {Link} from 'react-router-dom'
import Student from '../../assets/dummyData'
import { ArrowBack, ArrowForward, Check, CheckBox, CheckBoxSharp, ForkRight, Info, PieChart, Spa, ThumbDown, ThumbUp, Timelapse, TimelineTwoTone, Upload, Work } from '@mui/icons-material'
import Profile_State from '../Profile_stat/ProfileState'
import Barchart from '../Barchart/Barchart'

function SingleStat() {
  const [num, setNum] = useState(0)
  const quest = Student.questionData
  const [right, setRight] = useState(false)
  const [lineData, setLineData] = useState({
    labels:['june 2', 'june 4', 'june 6', 'june 8', 'june 14'],
    datasets:[{
      label:'Scores',
      data:[8, 7.6, 7.3, 8.0, 8.2],
      borderColor:['green','orange', 'red', 'brown', 'pink'],
      borderWidth: 1,
    }]
  })
  const handleNav = (e)=>{
    if(e.target.innerText==='Previous'){
      quest[num - 1] && setNum(num - 1)
  }else{
      quest[num + 1] && setNum(num + 1)
  }
  }

  useEffect(()=>{
    const getStatus = ()=>{
      quest[num].option.map(each_option=>{
        if (each_option.status == true && each_option.selected == true){
          setRight(true)
          return
        }
      })
    }
    getStatus()
  },[num])

  return (
    <div className='single_stat_container'>
      <div className="single_top">
      <h3>Memoization</h3>
      <h3><Link to='/'>QuesGen</Link></h3>
      </div>
      <div className="single_item">
        <div className="box box1">
          <div className="ques_status">
            <div className="ques_top">
              <p>Question {num + 1}</p>
              <p>{right ? `Correct` : `Wrong` }</p>
            </div>
              <p className='main_question'>{quest[num].quests}</p>
              <ul>
                        {quest[num].option.map(each_option=>{
                            return(
                                <li key={each_option.value}>{each_option.value}<div className="select"></div>{each_option.status && each_option.selected && <Check style={{color:'green'}}/>}</li>
                            )
                        })}
              </ul>
              <div className="test_navigate">
                <button onClick={(e=>{handleNav(e)})}><ArrowBack/> Previous</button>
                <button onClick={(e=>{handleNav(e)})}>Next<ArrowForward/></button>
            </div>
          </div>
        </div>
        <div className="box box2">
          <div className="box2_top">
          <Profile_State Icon={<Upload style={{backgroundColor:'brown', color:'white'}}/>} data={200} title='Questions'/>
          <Profile_State Icon={<ThumbUp style={{backgroundColor:'green', color:'white'}}/>} data={150} title='Correct'/>
          </div>
          <div className="box2_bottom">
          <Profile_State Icon={<ThumbDown style={{backgroundColor:'red', color:'white'}}/>} data={50} title='Wrong'/>
          <Profile_State Icon={<PieChart style={{backgroundColor:'blue', color:'white'}}/>} data={75} title='percent'/>
          </div>
        </div>
        <div className="box box3">
          <Barchart chartData={lineData}/>
        </div>
        <div className="box box4">
          <Profile_State Icon={<Info style={{backgroundColor:'blue', color:'white'}}/>} data='DSA' title=''/>
          <Profile_State Icon={<Work style={{backgroundColor:'blue', color:'white'}}/>} data={`7 Attempts`} title=''/>
        </div>
      </div>
    </div>
  )
}

export default SingleStat