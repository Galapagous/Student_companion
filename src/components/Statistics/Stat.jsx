import React, { useState } from 'react'
import Linechart from '../LineChart/LineChart'
import {Link} from 'react-router-dom'
import './stat.scss'
import { Folder, Percent, WorkHistory } from '@mui/icons-material'

function Stat() {
  const [PieData, setPieData] = useState({
    labels:['june 2', 'june 4', 'june 6', 'june 8', 'june 14', 'june 20', 'june 22', 'june 28'],
    datasets:[{
      label:'Scores',
      data:[8, 7.6, 7.3, 8.0, 8.2, 8.3, 8.2, 8.5],
      borderColor:['skyblue','blue', 'red', 'green', 'orange'],
      borderWidth: 1,
    }]
  })
  return (
    <div className='stat_container'>
      <div className="stat_main">
        <div className="stat_top">
          <Linechart chartData={PieData}/>
        </div>
        <div className="stat_bottom">
          <ul>
          <li>
          {[1,2,3,4,5].map(each_element=>{
            return(<div key={each_element.id} className='stats_con'>
              <div className="left_stat">
                <Folder/>
              </div>
              <div className="cent_stat">
                <p><Link to={`/single_stat/${1}`}>The trials of brother kojo</Link></p>
              </div>
              <div className="right_stat">
                <WorkHistory/>
                <p>40</p>
                <Percent/>
              </div>
            </div>)
          })}
          </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Stat