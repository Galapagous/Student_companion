import React from 'react'
import {Pie} from 'react-chartjs-2'
import {Chart as ChartjS} from 'chart.js/auto'

function Piechart({chartData}) {
  return (
    <div className='pie'>
        <Pie data={chartData} width={'150px'} height={'150px'} options={{maintainAspectRatio: false}}/>
    </div>
  )
}

export default Piechart