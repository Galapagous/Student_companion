// import React, { useEffect, useState } from 'react'
import './home.scss'
import Student from '../../assets/dummyData'
import ProfileState from '../../components/Profile_stat/ProfileState'
import { ContactSupport, MenuBook, PieChart, Upload } from '@mui/icons-material'
import Barchart from '../../components/Barchart/Barchart'
import { useState } from 'react'
import Linechart from '../../components/LineChart/LineChart'
import Piechart from '../../components/PieChart/Piechart'

function Home() {
  const [lineData, setLineData] = useState({
    labels:['june 2', 'june 4', 'june 6', 'june 8', 'june 14'],
    datasets:[{
      label:'Scores',
      data:[8, 7.6, 7.3, 8.0, 8.2],
      backgroundColor:['hsl(240, 56%, 5%)'],
      borderColor:['grey','blue', 'red', 'green', 'orange'],
      borderWidth: 1,
    }]
  })
  const [PieData, setPieData] = useState({
    labels:['june 2', 'june 4', 'june 6', 'june 8', 'june 14'],
    datasets:[{
      label:'Scores',
      data:[8, 7.6, 7.3, 8.0, 8.2],
      borderColor:['skyblue','blue', 'red', 'green', 'orange'],
      borderWidth: 1,
    }],
  })
  return (
    <div className='home_container'>
        <div className='home_top'>
          <div className='home_tleft'>
            {Student && <div className="left_profile">
            <h3>Overview</h3>
              <img src={Student.studentData.profile} alt="profile" />
              <span>{Student.studentData.lastname} {Student.studentData.firstname}</span>
              <div className="occupation">
              <p>{Student.studentData.occupation[0]}</p>
              <p>{Student.studentData.occupation[1]}</p>
              </div>
            </div>}
            <div className="right_profile">
              <div className="profile_top">
                <div className="profile_course">
                  <ProfileState Icon={<MenuBook style={{backgroundColor:'brown', color:'white'}}/>} data='9' title='Courses'/>
                </div>
                <div className="profile_upload">
                  <ProfileState Icon={<Upload style={{backgroundColor:'goldenrod', color:'white'}}/>} data='18' title='Upload'/>
                </div>
              </div>
              <div className="profile_bottom">
                <div className="profile_question">
                  <ProfileState Icon={<ContactSupport style={{backgroundColor:'red', color:'white'}}/>} data='200' title='Questions'/>
                </div>
                <div className="profile_status">
                  <ProfileState Icon={<PieChart style={{backgroundColor:'green', color:'white'}}/>} data='9' title='Rating'/>
                </div>
              </div>
            </div>
          </div>
          <div  className='home_tright'>
            <Piechart chartData={PieData}/>
          </div>
        </div>
        <div className='home_bottom'>
          <div className='home_bleft'>
            <Barchart chartData={lineData}/>
          </div>
          <div className='home_bright'>
            <Linechart chartData={lineData}/>
          </div>
        </div>
    </div>
  )
}

export default Home